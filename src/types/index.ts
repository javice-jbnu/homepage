// 멤버 관련 타입
export interface Member {
  _id: string;
  name: string;
  position: string;
  generation: number;
  major: string;
  email?: string;
  github?: string;
  profileImage?: string;
  skills: string[];
  projects: string[];
  introduction: string;
  isActive: boolean;
  joinDate: Date;
}

// 활동 사진 관련 타입
export interface ActivityPhoto {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  uploadDate: Date;
  category: 'study' | 'project' | 'event' | 'meeting' | 'etc';
  tags: string[];
  photographer?: string;
}

// 동아리방 사진 관련 타입
export interface ClubRoomPhoto {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string; // 동아리방 내 위치
  uploadDate: Date;
}

// 프로젝트 관련 타입
export interface Project {
  _id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  deployUrl?: string;
  liveUrl?: string;
  members: string[];
  startDate: Date;
  endDate?: Date;
  status: 'ongoing' | 'completed' | 'paused';
}

// 공지사항 타입
export interface Notice {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  isPinned: boolean;
  category: 'general' | 'event' | 'recruitment' | 'project';
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
} 