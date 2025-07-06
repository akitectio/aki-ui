export const DashboardSVG = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 400 240" className={className} fill="none">
        {/* Background */}
        <rect width="400" height="240" fill="url(#dashboardGradient)" rx="12" />

        {/* Sidebar */}
        <rect x="16" y="16" width="80" height="208" fill="white" fillOpacity="0.9" rx="8" />
        <rect x="24" y="32" width="16" height="16" fill="#3B82F6" rx="2" />
        <rect x="48" y="34" width="40" height="4" fill="#64748B" rx="2" />
        <rect x="48" y="42" width="24" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="24" y="64" width="16" height="16" fill="#10B981" rx="2" />
        <rect x="48" y="66" width="40" height="4" fill="#64748B" rx="2" />
        <rect x="48" y="74" width="32" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="24" y="96" width="16" height="16" fill="#F59E0B" rx="2" />
        <rect x="48" y="98" width="40" height="4" fill="#64748B" rx="2" />
        <rect x="48" y="106" width="28" height="3" fill="#94A3B8" rx="1.5" />

        {/* Main Content */}
        <rect x="112" y="16" width="272" height="208" fill="white" fillOpacity="0.7" rx="8" />

        {/* Header */}
        <rect x="128" y="32" width="120" height="6" fill="#1E293B" rx="3" />
        <rect x="128" y="44" width="80" height="4" fill="#64748B" rx="2" />

        {/* Stats Cards */}
        <rect x="128" y="64" width="56" height="40" fill="white" rx="6" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="136" y="76" width="8" height="8" fill="#3B82F6" rx="1" />
        <rect x="148" y="74" width="28" height="4" fill="#64748B" rx="2" />
        <rect x="148" y="82" width="20" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="196" y="64" width="56" height="40" fill="white" rx="6" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="204" y="76" width="8" height="8" fill="#10B981" rx="1" />
        <rect x="216" y="74" width="28" height="4" fill="#64748B" rx="2" />
        <rect x="216" y="82" width="20" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="264" y="64" width="56" height="40" fill="white" rx="6" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="272" y="76" width="8" height="8" fill="#F59E0B" rx="1" />
        <rect x="284" y="74" width="28" height="4" fill="#64748B" rx="2" />
        <rect x="284" y="82" width="20" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="332" y="64" width="56" height="40" fill="white" rx="6" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="340" y="76" width="8" height="8" fill="#EF4444" rx="1" />
        <rect x="352" y="74" width="28" height="4" fill="#64748B" rx="2" />
        <rect x="352" y="82" width="20" height="3" fill="#94A3B8" rx="1.5" />

        {/* Chart Area */}
        <rect x="128" y="120" width="120" height="88" fill="white" rx="6" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M140 180 L160 160 L180 170 L200 150 L220 140 L236 155" stroke="#3B82F6" strokeWidth="2" fill="none" />
        <circle cx="140" cy="180" r="2" fill="#3B82F6" />
        <circle cx="160" cy="160" r="2" fill="#3B82F6" />
        <circle cx="180" cy="170" r="2" fill="#3B82F6" />
        <circle cx="200" cy="150" r="2" fill="#3B82F6" />
        <circle cx="220" cy="140" r="2" fill="#3B82F6" />
        <circle cx="236" cy="155" r="2" fill="#3B82F6" />

        {/* Table */}
        <rect x="264" y="120" width="120" height="88" fill="white" rx="6" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="272" y="128" width="104" height="16" fill="#F8FAFC" rx="2" />
        <rect x="276" y="132" width="32" height="3" fill="#64748B" rx="1.5" />
        <rect x="316" y="132" width="24" height="3" fill="#64748B" rx="1.5" />
        <rect x="348" y="132" width="20" height="3" fill="#64748B" rx="1.5" />

        <rect x="276" y="152" width="32" height="3" fill="#94A3B8" rx="1.5" />
        <rect x="316" y="152" width="24" height="3" fill="#94A3B8" rx="1.5" />
        <rect x="348" y="152" width="20" height="3" fill="#10B981" rx="1.5" />

        <rect x="276" y="164" width="32" height="3" fill="#94A3B8" rx="1.5" />
        <rect x="316" y="164" width="24" height="3" fill="#94A3B8" rx="1.5" />
        <rect x="348" y="164" width="20" height="3" fill="#F59E0B" rx="1.5" />

        <rect x="276" y="176" width="32" height="3" fill="#94A3B8" rx="1.5" />
        <rect x="316" y="176" width="24" height="3" fill="#94A3B8" rx="1.5" />
        <rect x="348" y="176" width="20" height="3" fill="#EF4444" rx="1.5" />

        <defs>
            <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
        </defs>
    </svg>
)

export const SidebarSVG = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 400 240" className={className} fill="none">
        {/* Background */}
        <rect width="400" height="240" fill="url(#sidebarGradient)" rx="12" />

        {/* Collapsed Sidebar */}
        <rect x="16" y="16" width="64" height="208" fill="white" fillOpacity="0.9" rx="8" />

        {/* Icons in collapsed state */}
        <rect x="32" y="40" width="16" height="16" fill="#3B82F6" rx="2" />
        <rect x="32" y="72" width="16" height="16" fill="#10B981" rx="2" />
        <rect x="32" y="104" width="16" height="16" fill="#F59E0B" rx="2" />
        <rect x="32" y="136" width="16" height="16" fill="#EF4444" rx="2" />

        {/* Expand button */}
        <circle cx="64" cy="32" r="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M60 32 L68 32" stroke="#64748B" strokeWidth="1.5" />
        <path d="M64 28 L64 36" stroke="#64748B" strokeWidth="1.5" />

        {/* Expanded Sidebar (showing transition) */}
        <rect x="96" y="16" width="120" height="208" fill="white" fillOpacity="0.8" rx="8" strokeDasharray="4,4" stroke="#94A3B8" />

        <rect x="112" y="40" width="16" height="16" fill="#3B82F6" rx="2" />
        <rect x="136" y="42" width="60" height="4" fill="#64748B" rx="2" />
        <rect x="136" y="50" width="40" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="112" y="72" width="16" height="16" fill="#10B981" rx="2" />
        <rect x="136" y="74" width="60" height="4" fill="#64748B" rx="2" />
        <rect x="136" y="82" width="48" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="112" y="104" width="16" height="16" fill="#F59E0B" rx="2" />
        <rect x="136" y="106" width="60" height="4" fill="#64748B" rx="2" />
        <rect x="136" y="114" width="36" height="3" fill="#94A3B8" rx="1.5" />

        {/* Main Content */}
        <rect x="232" y="16" width="152" height="208" fill="white" fillOpacity="0.7" rx="8" />
        <rect x="248" y="32" width="80" height="6" fill="#1E293B" rx="3" />
        <rect x="248" y="44" width="120" height="160" fill="#F8FAFC" rx="4" stroke="#E2E8F0" strokeWidth="1" />

        <defs>
            <linearGradient id="sidebarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
        </defs>
    </svg>
)

export const AuthSVG = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 400 240" className={className} fill="none">
        {/* Background */}
        <rect width="400" height="240" fill="url(#authGradient)" rx="12" />

        {/* Login Form */}
        <rect x="120" y="40" width="160" height="160" fill="white" fillOpacity="0.9" rx="12" />

        {/* Logo/Title */}
        <circle cx="200" cy="70" r="16" fill="#3B82F6" />
        <rect x="192" y="62" width="4" height="16" fill="white" rx="2" />
        <rect x="204" y="62" width="4" height="16" fill="white" rx="2" />

        <rect x="160" y="96" width="80" height="6" fill="#1E293B" rx="3" />
        <rect x="170" y="108" width="60" height="4" fill="#64748B" rx="2" />

        {/* Form Fields */}
        <rect x="140" y="128" width="120" height="12" fill="#F8FAFC" rx="6" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="148" y="132" width="60" height="4" fill="#94A3B8" rx="2" />

        <rect x="140" y="148" width="120" height="12" fill="#F8FAFC" rx="6" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="148" y="152" width="40" height="4" fill="#94A3B8" rx="2" />

        {/* Login Button */}
        <rect x="140" y="172" width="120" height="16" fill="#3B82F6" rx="8" />
        <rect x="185" y="177" width="30" height="6" fill="white" rx="3" />

        {/* Security Icons */}
        <circle cx="80" cy="80" r="20" fill="white" fillOpacity="0.8" />
        <rect x="72" y="72" width="16" height="16" fill="none" stroke="#10B981" strokeWidth="2" rx="2" />
        <path d="M76 80 L78 82 L84 76" stroke="#10B981" strokeWidth="2" fill="none" />

        <circle cx="320" cy="160" r="20" fill="white" fillOpacity="0.8" />
        <rect x="314" y="152" width="12" height="8" fill="none" stroke="#F59E0B" strokeWidth="2" rx="2" />
        <rect x="312" y="156" width="16" height="12" fill="none" stroke="#F59E0B" strokeWidth="2" rx="2" />
        <circle cx="320" cy="162" r="1" fill="#F59E0B" />

        <defs>
            <linearGradient id="authGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="100%" stopColor="#BFDBFE" />
            </linearGradient>
        </defs>
    </svg>
)

export const CalendarSVG = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 400 240" className={className} fill="none">
        {/* Background */}
        <rect width="400" height="240" fill="url(#calendarGradient)" rx="12" />

        {/* Calendar Container */}
        <rect x="80" y="30" width="240" height="180" fill="white" fillOpacity="0.9" rx="12" />

        {/* Header */}
        <rect x="80" y="30" width="240" height="40" fill="#3B82F6" rx="12" />
        <rect x="80" y="54" width="240" height="16" fill="#3B82F6" />

        <rect x="100" y="42" width="80" height="6" fill="white" rx="3" />
        <rect x="100" y="52" width="60" height="4" fill="white" fillOpacity="0.8" rx="2" />

        {/* Navigation arrows */}
        <path d="M260 45 L268 50 L260 55" stroke="white" strokeWidth="2" fill="none" />
        <path d="M280 55 L272 50 L280 45" stroke="white" strokeWidth="2" fill="none" />

        {/* Calendar Grid */}
        <g transform="translate(96, 86)">
            {/* Week headers */}
            <rect x="0" y="0" width="208" height="20" fill="#F8FAFC" />
            {Array.from({ length: 7 }, (_, i) => (
                <g key={i}>
                    <rect x={i * 29.7} y="4" width="24" height="3" fill="#64748B" rx="1.5" />
                </g>
            ))}

            {/* Calendar dates */}
            {Array.from({ length: 6 }, (_, week) => (
                <g key={week}>
                    {Array.from({ length: 7 }, (_, day) => {
                        const isToday = week === 2 && day === 3;
                        const hasEvent = (week === 1 && day === 5) || (week === 3 && day === 1) || (week === 4 && day === 4);
                        return (
                            <g key={day}>
                                <rect
                                    x={day * 29.7}
                                    y={24 + week * 20}
                                    width="26"
                                    height="18"
                                    fill={isToday ? "#3B82F6" : "transparent"}
                                    rx="3"
                                />
                                <rect
                                    x={day * 29.7 + 8}
                                    y={28 + week * 20}
                                    width="10"
                                    height="3"
                                    fill={isToday ? "white" : "#64748B"}
                                    rx="1.5"
                                />
                                {hasEvent && (
                                    <circle
                                        cx={day * 29.7 + 21}
                                        cy={30 + week * 20}
                                        r="2"
                                        fill="#10B981"
                                    />
                                )}
                            </g>
                        );
                    })}
                </g>
            ))}
        </g>

        {/* Event indicators */}
        <rect x="340" y="60" width="32" height="4" fill="#10B981" rx="2" />
        <rect x="340" y="68" width="24" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="340" y="80" width="32" height="4" fill="#F59E0B" rx="2" />
        <rect x="340" y="88" width="28" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="340" y="100" width="32" height="4" fill="#EF4444" rx="2" />
        <rect x="340" y="108" width="20" height="3" fill="#94A3B8" rx="1.5" />

        <defs>
            <linearGradient id="calendarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#FDE68A" />
            </linearGradient>
        </defs>
    </svg>
)

export const EcommerceSVG = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 400 240" className={className} fill="none">
        {/* Background */}
        <rect width="400" height="240" fill="url(#ecommerceGradient)" rx="12" />

        {/* Product Cards */}
        <rect x="40" y="40" width="100" height="160" fill="white" fillOpacity="0.9" rx="8" />
        <rect x="48" y="48" width="84" height="60" fill="#F8FAFC" rx="4" />

        {/* Product image placeholder */}
        <circle cx="90" cy="78" r="20" fill="#E2E8F0" />
        <rect x="82" y="70" width="16" height="16" fill="#94A3B8" rx="2" />

        <rect x="56" y="120" width="68" height="6" fill="#1E293B" rx="3" />
        <rect x="56" y="132" width="48" height="4" fill="#64748B" rx="2" />
        <rect x="56" y="140" width="36" height="3" fill="#94A3B8" rx="1.5" />

        {/* Price */}
        <rect x="56" y="156" width="32" height="8" fill="#10B981" rx="4" />
        <rect x="60" y="158" width="24" height="4" fill="white" rx="2" />

        {/* Add to cart */}
        <rect x="96" y="156" width="28" height="8" fill="#3B82F6" rx="4" />
        <rect x="100" y="158" width="20" height="4" fill="white" rx="2" />

        {/* Second product card */}
        <rect x="160" y="40" width="100" height="160" fill="white" fillOpacity="0.9" rx="8" />
        <rect x="168" y="48" width="84" height="60" fill="#F8FAFC" rx="4" />

        <circle cx="210" cy="78" r="20" fill="#E2E8F0" />
        <rect x="202" y="70" width="16" height="16" fill="#94A3B8" rx="2" />

        <rect x="176" y="120" width="68" height="6" fill="#1E293B" rx="3" />
        <rect x="176" y="132" width="48" height="4" fill="#64748B" rx="2" />
        <rect x="176" y="140" width="36" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="176" y="156" width="32" height="8" fill="#10B981" rx="4" />
        <rect x="180" y="158" width="24" height="4" fill="white" rx="2" />

        <rect x="216" y="156" width="28" height="8" fill="#3B82F6" rx="4" />
        <rect x="220" y="158" width="20" height="4" fill="white" rx="2" />

        {/* Shopping cart */}
        <rect x="300" y="40" width="80" height="160" fill="white" fillOpacity="0.9" rx="8" />
        <rect x="312" y="52" width="56" height="6" fill="#1E293B" rx="3" />
        <rect x="312" y="64" width="40" height="4" fill="#64748B" rx="2" />

        {/* Cart items */}
        <rect x="312" y="80" width="56" height="20" fill="#F8FAFC" rx="4" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="316" y="84" width="12" height="12" fill="#E2E8F0" rx="2" />
        <rect x="332" y="86" width="24" height="3" fill="#64748B" rx="1.5" />
        <rect x="332" y="91" width="16" height="2" fill="#94A3B8" rx="1" />

        <rect x="312" y="108" width="56" height="20" fill="#F8FAFC" rx="4" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="316" y="112" width="12" height="12" fill="#E2E8F0" rx="2" />
        <rect x="332" y="114" width="24" height="3" fill="#64748B" rx="1.5" />
        <rect x="332" y="119" width="16" height="2" fill="#94A3B8" rx="1" />

        {/* Total */}
        <rect x="312" y="140" width="56" height="16" fill="#10B981" rx="8" />
        <rect x="320" y="145" width="40" height="6" fill="white" rx="3" />

        {/* Checkout */}
        <rect x="312" y="164" width="56" height="16" fill="#3B82F6" rx="8" />
        <rect x="324" y="169" width="32" height="6" fill="white" rx="3" />

        <defs>
            <linearGradient id="ecommerceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF3F3" />
                <stop offset="100%" stopColor="#FDE2E2" />
            </linearGradient>
        </defs>
    </svg>
)

export const FormSVG = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 400 240" className={className} fill="none">
        {/* Background */}
        <rect width="400" height="240" fill="url(#formGradient)" rx="12" />

        {/* Form Container */}
        <rect x="100" y="30" width="200" height="180" fill="white" fillOpacity="0.9" rx="12" />

        {/* Form Header */}
        <rect x="120" y="50" width="80" height="8" fill="#1E293B" rx="4" />
        <rect x="120" y="64" width="120" height="4" fill="#64748B" rx="2" />

        {/* Form Fields */}
        <g transform="translate(120, 80)">
            {/* Name field */}
            <rect x="0" y="0" width="12" height="3" fill="#64748B" rx="1.5" />
            <rect x="0" y="8" width="160" height="16" fill="#F8FAFC" rx="8" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="8" y="12" width="80" height="4" fill="#94A3B8" rx="2" />

            {/* Email field */}
            <rect x="0" y="32" width="20" height="3" fill="#64748B" rx="1.5" />
            <rect x="0" y="40" width="160" height="16" fill="#F8FAFC" rx="8" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="8" y="44" width="100" height="4" fill="#94A3B8" rx="2" />

            {/* Message field */}
            <rect x="0" y="64" width="28" height="3" fill="#64748B" rx="1.5" />
            <rect x="0" y="72" width="160" height="40" fill="#F8FAFC" rx="8" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="8" y="80" width="120" height="3" fill="#94A3B8" rx="1.5" />
            <rect x="8" y="88" width="140" height="3" fill="#94A3B8" rx="1.5" />
            <rect x="8" y="96" width="100" height="3" fill="#94A3B8" rx="1.5" />

            {/* Checkbox */}
            <rect x="0" y="120" width="12" height="12" fill="#3B82F6" rx="2" />
            <path d="M3 126 L5 128 L9 124" stroke="white" strokeWidth="1.5" fill="none" />
            <rect x="20" y="122" width="100" height="3" fill="#64748B" rx="1.5" />
            <rect x="20" y="129" width="80" height="3" fill="#94A3B8" rx="1.5" />

            {/* Submit button */}
            <rect x="0" y="144" width="160" height="20" fill="#10B981" rx="10" />
            <rect x="65" y="150" width="30" height="8" fill="white" rx="4" />
        </g>

        {/* Validation indicators */}
        <circle cx="320" cy="110" r="8" fill="#10B981" />
        <path d="M316 110 L318 112 L324 106" stroke="white" strokeWidth="1.5" fill="none" />

        <circle cx="320" cy="135" r="8" fill="#EF4444" />
        <path d="M316 135 L324 135" stroke="white" strokeWidth="1.5" />
        <path d="M320 131 L320 139" stroke="white" strokeWidth="1.5" />

        <defs>
            <linearGradient id="formGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0FDF4" />
                <stop offset="100%" stopColor="#DCFCE7" />
            </linearGradient>
        </defs>
    </svg>
)

export const ChatSVG = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 400 240" className={className} fill="none">
        {/* Background */}
        <rect width="400" height="240" fill="url(#chatGradient)" rx="12" />

        {/* Chat Container */}
        <rect x="60" y="30" width="280" height="180" fill="white" fillOpacity="0.9" rx="12" />

        {/* Header */}
        <rect x="60" y="30" width="280" height="40" fill="#F8FAFC" rx="12" />
        <rect x="60" y="54" width="280" height="16" fill="#F8FAFC" />

        <circle cx="85" cy="45" r="12" fill="#3B82F6" />
        <rect x="81" y="41" width="8" height="8" fill="white" rx="1" />

        <rect x="105" y="40" width="60" height="4" fill="#1E293B" rx="2" />
        <rect x="105" y="48" width="40" height="3" fill="#10B981" rx="1.5" />

        {/* Online status */}
        <circle cx="280" cy="45" r="4" fill="#10B981" />
        <rect x="290" y="43" width="32" height="3" fill="#64748B" rx="1.5" />

        {/* Messages */}
        <g transform="translate(80, 80)">
            {/* Incoming message */}
            <rect x="0" y="0" width="160" height="24" fill="#F1F5F9" rx="12" />
            <rect x="12" y="6" width="120" height="3" fill="#64748B" rx="1.5" />
            <rect x="12" y="12" width="100" height="3" fill="#64748B" rx="1.5" />
            <rect x="12" y="18" width="80" height="3" fill="#94A3B8" rx="1.5" />

            {/* Outgoing message */}
            <rect x="80" y="32" width="160" height="20" fill="#3B82F6" rx="12" />
            <rect x="92" y="38" width="120" height="3" fill="white" rx="1.5" />
            <rect x="92" y="44" width="80" height="3" fill="white" fillOpacity="0.8" rx="1.5" />

            {/* Incoming message */}
            <rect x="0" y="60" width="140" height="20" fill="#F1F5F9" rx="12" />
            <rect x="12" y="66" width="100" height="3" fill="#64748B" rx="1.5" />
            <rect x="12" y="72" width="60" height="3" fill="#94A3B8" rx="1.5" />

            {/* Typing indicator */}
            <rect x="0" y="88" width="80" height="16" fill="#F1F5F9" rx="8" />
            <circle cx="20" cy="96" r="2" fill="#94A3B8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="30" cy="96" r="2" fill="#94A3B8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="96" r="2" fill="#94A3B8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
        </g>

        {/* Input area */}
        <rect x="80" y="190" width="200" height="16" fill="#F8FAFC" rx="8" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="88" y="194" width="120" height="3" fill="#94A3B8" rx="1.5" />

        <rect x="290" y="190" width="32" height="16" fill="#3B82F6" rx="8" />
        <rect x="298" y="195" width="16" height="6" fill="white" rx="3" />

        <defs>
            <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0F9FF" />
                <stop offset="100%" stopColor="#E0F2FE" />
            </linearGradient>
        </defs>
    </svg>
)

export const DataTableSVG = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 400 240" className={className} fill="none">
        {/* Background */}
        <rect width="400" height="240" fill="url(#tableGradient)" rx="12" />

        {/* Table Container */}
        <rect x="40" y="40" width="320" height="160" fill="white" fillOpacity="0.9" rx="8" />

        {/* Table Header */}
        <rect x="40" y="40" width="320" height="32" fill="#F8FAFC" rx="8" />
        <rect x="40" y="64" width="320" height="8" fill="#F8FAFC" />

        {/* Header columns */}
        <rect x="56" y="50" width="40" height="4" fill="#64748B" rx="2" />
        <rect x="120" y="50" width="60" height="4" fill="#64748B" rx="2" />
        <rect x="200" y="50" width="48" height="4" fill="#64748B" rx="2" />
        <rect x="268" y="50" width="36" height="4" fill="#64748B" rx="2" />
        <rect x="320" y="50" width="24" height="4" fill="#64748B" rx="2" />

        {/* Sort indicators */}
        <path d="M100 48 L104 52 L108 48" stroke="#94A3B8" strokeWidth="1" fill="none" />
        <path d="M184 52 L188 48 L192 52" stroke="#3B82F6" strokeWidth="1.5" fill="none" />

        {/* Table Rows */}
        <g transform="translate(0, 72)">
            {Array.from({ length: 8 }, (_, i) => (
                <g key={i}>
                    <rect x="40" y={i * 16} width="320" height="16" fill={i % 2 === 0 ? "white" : "#FAFAFA"} />

                    {/* Checkbox */}
                    <rect x="48" y={i * 16 + 4} width="8" height="8" fill={i === 2 ? "#3B82F6" : "white"} stroke="#E2E8F0" strokeWidth="1" rx="1" />
                    {i === 2 && <path d="M50 {i * 16 + 8} L51 {i * 16 + 9} L54 {i * 16 + 6}" stroke="white" strokeWidth="1" fill="none" />}

                    {/* Name */}
                    <rect x="64" y={i * 16 + 4} width="48" height="3" fill="#1E293B" rx="1.5" />
                    <rect x="64" y={i * 16 + 9} width="32" height="2" fill="#94A3B8" rx="1" />

                    {/* Email */}
                    <rect x="120" y={i * 16 + 6} width="60" height="3" fill="#64748B" rx="1.5" />

                    {/* Role */}
                    <rect x="200" y={i * 16 + 4} width="32" height="8" fill={i % 3 === 0 ? "#DBEAFE" : i % 3 === 1 ? "#D1FAE5" : "#FEF3C7"} rx="4" />
                    <rect x="204" y={i * 16 + 6} width="24" height="3" fill={i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#10B981" : "#F59E0B"} rx="1.5" />

                    {/* Status */}
                    <circle cx={275} cy={i * 16 + 8} r="3" fill={i % 2 === 0 ? "#10B981" : "#F59E0B"} />
                    <rect x="284" y={i * 16 + 6} width="20" height="3" fill="#64748B" rx="1.5" />

                    {/* Actions */}
                    <rect x="320" y={i * 16 + 5} width="4" height="6" fill="#94A3B8" rx="1" />
                    <rect x="328" y={i * 16 + 5} width="4" height="6" fill="#94A3B8" rx="1" />
                    <rect x="336" y={i * 16 + 5} width="4" height="6" fill="#94A3B8" rx="1" />
                </g>
            ))}
        </g>

        {/* Pagination */}
        <rect x="40" y="208" width="320" height="24" fill="#F8FAFC" rx="8" />
        <rect x="56" y="216" width="80" height="3" fill="#64748B" rx="1.5" />

        <rect x="280" y="213" width="16" height="10" fill="white" stroke="#E2E8F0" strokeWidth="1" rx="2" />
        <rect x="284" y="216" width="8" height="3" fill="#3B82F6" rx="1.5" />

        <rect x="300" y="213" width="16" height="10" fill="white" stroke="#E2E8F0" strokeWidth="1" rx="2" />
        <rect x="304" y="216" width="8" height="3" fill="#64748B" rx="1.5" />

        <rect x="320" y="213" width="16" height="10" fill="white" stroke="#E2E8F0" strokeWidth="1" rx="2" />
        <rect x="324" y="216" width="8" height="3" fill="#64748B" rx="1.5" />

        <defs>
            <linearGradient id="tableGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEFEFE" />
                <stop offset="100%" stopColor="#F8FAFC" />
            </linearGradient>
        </defs>
    </svg>
)

export const MarketingSVG = ({ className = "w-full h-full" }: { className?: string }) => (
    <svg viewBox="0 0 400 240" className={className} fill="none">
        {/* Background */}
        <rect width="400" height="240" fill="url(#marketingGradient)" rx="12" />

        {/* Reviews Header */}
        <rect x="32" y="24" width="336" height="40" fill="white" fillOpacity="0.9" rx="8" />
        <rect x="48" y="32" width="80" height="6" fill="#1E293B" rx="3" />
        <rect x="48" y="44" width="120" height="4" fill="#64748B" rx="2" />

        {/* Rating Stars */}
        <g transform="translate(280, 32)">
            {[0, 1, 2, 3, 4].map((i) => (
                <polygon
                    key={i}
                    points={`${i * 14 + 6},2 ${i * 14 + 8},6 ${i * 14 + 12},6 ${i * 14 + 9},9 ${i * 14 + 10},13 ${i * 14 + 6},11 ${i * 14 + 2},13 ${i * 14 + 3},9 ${i * 14},6 ${i * 14 + 4},6`}
                    fill="#FBBF24"
                />
            ))}
        </g>

        {/* Review Cards */}
        {[0, 1, 2].map((row) => (
            <g key={row}>
                {[0, 1].map((col) => (
                    <g key={col} transform={`translate(${32 + col * 172}, ${80 + row * 48})`}>
                        <rect width="160" height="40" fill="white" fillOpacity="0.9" rx="8" />

                        {/* Avatar */}
                        <circle cx="16" cy="16" r="8" fill="#3B82F6" />
                        <rect x="12" y="12" width="8" height="4" fill="white" rx="2" />
                        <rect x="10" y="18" width="12" height="4" fill="white" rx="2" />

                        {/* Name and Role */}
                        <rect x="32" y="8" width="48" height="3" fill="#1E293B" rx="1.5" />
                        <rect x="32" y="14" width="32" height="2" fill="#64748B" rx="1" />

                        {/* Stars */}
                        <g transform="translate(32, 20)">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <polygon
                                    key={i}
                                    points={`${i * 8 + 3},0 ${i * 8 + 4},2 ${i * 8 + 6},2 ${i * 8 + 5},4 ${i * 8 + 6},6 ${i * 8 + 3},5 ${i * 8},6 ${i * 8 + 1},4 ${i * 8 - 1},2 ${i * 8 + 2},2`}
                                    fill="#FBBF24"
                                />
                            ))}
                        </g>

                        {/* Review text lines */}
                        <rect x="8" y="28" width="144" height="2" fill="#64748B" rx="1" />
                        <rect x="8" y="32" width="120" height="2" fill="#94A3B8" rx="1" />

                        {/* Verified badge */}
                        {(row + col) % 2 === 0 && (
                            <rect x="120" y="6" width="32" height="12" fill="#DCFCE7" rx="6" />
                        )}
                        {(row + col) % 2 === 0 && (
                            <rect x="124" y="9" width="24" height="2" fill="#16A34A" rx="1" />
                        )}
                    </g>
                ))}
            </g>
        ))}

        {/* Rating Summary */}
        <rect x="320" y="80" width="48" height="80" fill="white" fillOpacity="0.9" rx="8" />
        <rect x="328" y="88" width="32" height="4" fill="#1E293B" rx="2" />
        <rect x="328" y="96" width="24" height="3" fill="#64748B" rx="1.5" />

        {/* Rating bars */}
        {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(328, ${108 + i * 8})`}>
                <rect width="8" height="4" fill="#F1F5F9" rx="2" />
                <rect width={8 - i * 1.5} height="4" fill="#3B82F6" rx="2" />
                <rect x="12" y="1" width="16" height="2" fill="#64748B" rx="1" />
            </g>
        ))}

        <defs>
            <linearGradient id="marketingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF7FF" />
                <stop offset="100%" stopColor="#F3E8FF" />
            </linearGradient>
        </defs>
    </svg>
)

export const getBlockSVG = (category: string) => {
    switch (category.toLowerCase()) {
        case 'dashboard':
            return DashboardSVG
        case 'navigation':
            return SidebarSVG
        case 'authentication':
            return AuthSVG
        case 'data display':
            return DataTableSVG
        case 'e-commerce':
            return EcommerceSVG
        case 'forms':
            return FormSVG
        case 'communication':
            return ChatSVG
        case 'marketing':
            return MarketingSVG
        default:
            return DashboardSVG
    }
}
