// 임시로 깃헙 페이지 배포를 위해 백엔드 연결을 끊었습니다
// 실제 API 호출 대신 빈 데이터 또는 에러를 반환합니다

// import axios from 'axios';
import { 
  Member, 
  ActivityPhoto, 
  ClubRoomPhoto, 
  Project, 
  Notice, 
  ApiResponse 
} from '../types';

// 임시 비활성화
// const API_BASE_URL = process.env.NODE_ENV === 'production' 
//   ? 'https://your-domain.com/api' 
//   : '/api';

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 10000,
// });

// 멤버 관련 API - 임시 비활성화
export const memberApi = {
  getAllMembers: async (): Promise<Member[]> => {
    // 백엔드 연결 해제로 빈 배열 반환
    return [];
  },
  
  getActiveMembers: async (): Promise<Member[]> => {
    // 백엔드 연결 해제로 빈 배열 반환
    return [];
  },
  
  getMemberById: async (id: string): Promise<Member | null> => {
    // 백엔드 연결 해제로 null 반환
    return null;
  },
  
  getMembersByGeneration: async (generation: number): Promise<Member[]> => {
    // 백엔드 연결 해제로 빈 배열 반환
    return [];
  }
};

// 활동 사진 관련 API - 임시 비활성화
export const activityPhotoApi = {
  getAllPhotos: async (): Promise<ActivityPhoto[]> => {
    // 백엔드 연결 해제로 빈 배열 반환
    return [];
  },
  
  getPhotosByCategory: async (category: string): Promise<ActivityPhoto[]> => {
    // 백엔드 연결 해제로 빈 배열 반환
    return [];
  },
  
  uploadPhoto: async (formData: FormData): Promise<ActivityPhoto> => {
    // 백엔드 연결 해제로 에러 발생
    throw new Error('현재 서비스 준비중입니다.');
  }
};

// 동아리방 사진 관련 API - 임시 비활성화
export const clubRoomApi = {
  getAllPhotos: async (): Promise<ClubRoomPhoto[]> => {
    // 백엔드 연결 해제로 빈 배열 반환
    return [];
  },
  
  uploadPhoto: async (formData: FormData): Promise<ClubRoomPhoto> => {
    // 백엔드 연결 해제로 에러 발생
    throw new Error('현재 서비스 준비중입니다.');
  }
};

// 프로젝트 관련 API - 임시 비활성화
export const projectApi = {
  getAllProjects: async (): Promise<Project[]> => {
    // 백엔드 연결 해제로 빈 배열 반환
    return [];
  },
  
  getProjectById: async (id: string): Promise<Project | null> => {
    // 백엔드 연결 해제로 null 반환
    return null;
  }
};

// 공지사항 관련 API - 임시 비활성화
export const noticeApi = {
  getAllNotices: async (): Promise<Notice[]> => {
    // 백엔드 연결 해제로 빈 배열 반환
    return [];
  },
  
  getPinnedNotices: async (): Promise<Notice[]> => {
    // 백엔드 연결 해제로 빈 배열 반환
    return [];
  }
};

// 편의 함수들 (하위 호환성을 위해)
export const getMembers = memberApi.getAllMembers;
export const getActiveMembers = memberApi.getActiveMembers;
export const getMembersByGeneration = memberApi.getMembersByGeneration;
export const getActivityPhotos = activityPhotoApi.getAllPhotos;
export const getActivityPhotosByCategory = activityPhotoApi.getPhotosByCategory;
export const uploadActivityPhoto = activityPhotoApi.uploadPhoto;
export const getClubRoomPhotos = clubRoomApi.getAllPhotos;
export const uploadClubRoomPhoto = clubRoomApi.uploadPhoto;
export const getProjects = projectApi.getAllProjects;
export const getProjectById = projectApi.getProjectById;
export const getNotices = noticeApi.getAllNotices;
export const getPinnedNotices = noticeApi.getPinnedNotices; 