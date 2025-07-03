'use client';

// Tạm thời import từ đường dẫn tương đối để test
import { Badge, Button, Card } from '../../../src/lib/adapters/nextjs';

// These components are already wrapped as client components
// No need for additional wrapping
export const ClientBadge = Badge;
export const ClientButton = Button;
export const ClientCard = Card;
