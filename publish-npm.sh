#!/bin/bash
# Script để publish package npm từ máy local

# Màu sắc cho output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Hiển thị thông báo
echo -e "${BLUE}=== Bắt đầu quá trình publish package npm ===${NC}"

# Đường dẫn tới thư mục gốc của package
PACKAGE_DIR=$(pwd)
echo -e "${BLUE}Thư mục package: ${PACKAGE_DIR}${NC}"

# Kiểm tra package.json
if [ ! -f "${PACKAGE_DIR}/package.json" ]; then
  echo -e "${RED}Lỗi: Không tìm thấy file package.json trong thư mục hiện tại${NC}"
  exit 1
fi

# Lấy thông tin package
PACKAGE_NAME=$(node -p "require('./package.json').name")
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo -e "${BLUE}Package: ${YELLOW}${PACKAGE_NAME}${NC}"
echo -e "${BLUE}Phiên bản hiện tại: ${YELLOW}${CURRENT_VERSION}${NC}"

# Hỏi loại version increment
echo -e "${BLUE}Chọn loại version increment:${NC}"
echo -e "  ${YELLOW}1)${NC} patch (1.0.0 -> 1.0.1)"
echo -e "  ${YELLOW}2)${NC} minor (1.0.0 -> 1.1.0)"
echo -e "  ${YELLOW}3)${NC} major (1.0.0 -> 2.0.0)"
echo -e "  ${YELLOW}4)${NC} Giữ nguyên phiên bản hiện tại"
read -p "Lựa chọn của bạn (mặc định: 1): " VERSION_CHOICE

# Xác định version type
case $VERSION_CHOICE in
  2)
    VERSION_TYPE="minor"
    ;;
  3)
    VERSION_TYPE="major"
    ;;
  4)
    VERSION_TYPE="same"
    ;;
  *)
    VERSION_TYPE="patch"
    ;;
esac

# Tạo backup package.json
cp package.json package.json.backup

# Tạo backup README.md và thay thế bằng NPM_README.md nếu có
if [ -f "NPM_README.md" ]; then
  cp README.md README.md.backup
  cp NPM_README.md README.md
  echo -e "${BLUE}Đã thay thế README.md bằng NPM_README.md${NC}"
fi

# Tăng version nếu cần
if [ "$VERSION_TYPE" != "same" ]; then
  echo -e "${BLUE}Tăng phiên bản (${VERSION_TYPE})...${NC}"
  NEW_VERSION=$(npm --no-git-tag-version version $VERSION_TYPE)
  echo -e "${GREEN}Đã tăng phiên bản từ ${CURRENT_VERSION} lên ${NEW_VERSION}${NC}"
else
  echo -e "${BLUE}Giữ nguyên phiên bản ${CURRENT_VERSION}${NC}"
  NEW_VERSION="v${CURRENT_VERSION}"
fi

# Xóa trường private nếu có
echo -e "${BLUE}Xóa trường private trong package.json...${NC}"
if [ "$(node -p "typeof require('./package.json').private !== 'undefined'")" = "true" ]; then
  node -e "
    const pkg = require('./package.json');
    delete pkg.private;
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
  "
  echo -e "${GREEN}Đã xóa trường private${NC}"
else
  echo -e "${YELLOW}Không tìm thấy trường private${NC}"
fi

# Build package
echo -e "${BLUE}Đang build package...${NC}"
npm run build
if [ $? -ne 0 ]; then
  echo -e "${RED}Lỗi: Không thể build package${NC}"
  # Khôi phục các file
  mv package.json.backup package.json
  if [ -f "README.md.backup" ]; then
    mv README.md.backup README.md
  fi
  exit 1
fi
echo -e "${GREEN}Build thành công!${NC}"

# Publish package
echo -e "${BLUE}Đang publish package lên npm...${NC}"
echo -e "${YELLOW}Đảm bảo bạn đã đăng nhập npm (npm login) trước khi chạy lệnh này${NC}"
read -p "Bạn có muốn tiếp tục publish? (y/n): " CONFIRM_PUBLISH

if [ "$CONFIRM_PUBLISH" != "y" ] && [ "$CONFIRM_PUBLISH" != "Y" ]; then
  echo -e "${YELLOW}Hủy quá trình publish${NC}"
  # Khôi phục các file
  mv package.json.backup package.json
  if [ -f "README.md.backup" ]; then
    mv README.md.backup README.md
  fi
  exit 0
fi

# Thực hiện publish
npm publish --access public
PUBLISH_RESULT=$?

# Khôi phục README.md
if [ -f "README.md.backup" ]; then
  mv README.md.backup README.md
  echo -e "${BLUE}Đã khôi phục README.md gốc${NC}"
fi

# Kiểm tra kết quả publish
if [ $PUBLISH_RESULT -eq 0 ]; then
  echo -e "${GREEN}Publish thành công! Version: ${NEW_VERSION}${NC}"
  
  # Hỏi người dùng có muốn commit thay đổi không
  read -p "Bạn có muốn commit thay đổi version? (y/n): " CONFIRM_COMMIT
  
  if [ "$CONFIRM_COMMIT" = "y" ] || [ "$CONFIRM_COMMIT" = "Y" ]; then
    # Commit thay đổi
    git add package.json package-lock.json
    git commit -m "chore: bump version to ${NEW_VERSION}"
    git tag ${NEW_VERSION}
    
    # Hỏi người dùng có muốn push thay đổi không
    read -p "Bạn có muốn push thay đổi lên remote? (y/n): " CONFIRM_PUSH
    
    if [ "$CONFIRM_PUSH" = "y" ] || [ "$CONFIRM_PUSH" = "Y" ]; then
      git push
      git push --tags
      echo -e "${GREEN}Đã push thay đổi và tag lên remote repository${NC}"
    else
      echo -e "${YELLOW}Đã commit thay đổi locally. Sử dụng 'git push' và 'git push --tags' để push lên remote${NC}"
    fi
  else
    # Nếu không commit, khôi phục package.json
    mv package.json.backup package.json
    echo -e "${YELLOW}Đã hủy commit và khôi phục package.json${NC}"
  fi
else
  echo -e "${RED}Lỗi: Không thể publish package${NC}"
  # Khôi phục package.json
  mv package.json.backup package.json
  echo -e "${YELLOW}Đã khôi phục package.json${NC}"
  exit 1
fi

echo -e "${GREEN}Hoàn tất!${NC}"
