import { 
  Zap, Droplet, Wrench, Sparkles, Hammer, 
  Building, PaintBucket, Drill, Shield, 
  Clock, Award, Users, Star, Phone, 
  MessageSquare, Home, Factory,
  ArrowRight, CheckCircle, MapPin, ChevronRight,
  Calendar, FileText, BadgeCheck,
  X, Maximize2, ChevronLeft, ChevronRight as ChevronRightIcon,
  ShieldCheck, Truck, Globe, Heart, ThumbsUp,
  Award as AwardIcon,
  LucideIcon
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  // Service icons
  "Zap": Zap,
  "Droplet": Droplet,
  "Wrench": Wrench,
  "Sparkles": Sparkles,
  "Hammer": Hammer,
  "Building": Building,
  "PaintBucket": PaintBucket,
  "Drill": Drill,
  
  // Benefit icons
  "Shield": Shield,
  "Clock": Clock,
  "Award": Award,
  "Users": Users,
  "Star": Star,
  "Phone": Phone,
  "MessageSquare": MessageSquare,
  "Home": Home,
  "Factory": Factory,
  "Calendar": Calendar,
  "FileText": FileText,
  "BadgeCheck": BadgeCheck,
  "ShieldCheck": ShieldCheck,
  "Truck": Truck,
  "Globe": Globe,
  "Heart": Heart,
  "ThumbsUp": ThumbsUp,
  "AwardIcon": AwardIcon,
  
  // Navigation icons
  "ArrowRight": ArrowRight,
  "CheckCircle": CheckCircle,
  "MapPin": MapPin,
  "ChevronRight": ChevronRight,
  "X": X,
  "Maximize2": Maximize2,
  "ChevronLeft": ChevronLeft,
  "ChevronRightIcon": ChevronRightIcon,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Wrench; // Default icon
}