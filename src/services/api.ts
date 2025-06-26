// 백엔드 연결이 준비될 때까지 임시로 빈 데이터를 반환하는 API 서비스입니다.

import { 
  Member, 
  ActivityPhoto, 
  ClubRoomPhoto, 
  Project, 
  Notice
} from '../types';

// 임시 빈 데이터 반환 함수들
const returnEmptyArray = async <T>(): Promise<T[]> => [];
const returnNull = async <T>(): Promise<T | null> => null;

// 멤버 관련 API
export const memberApi = {
  getAllMembers: () => returnEmptyArray<Member>(),
  getActiveMembers: () => returnEmptyArray<Member>(),
  getMemberById: () => returnNull<Member>(),
  getMembersByGeneration: () => returnEmptyArray<Member>()
};

// 활동 사진 관련 API
export const activityPhotoApi = {
  getAllPhotos: () => returnEmptyArray<ActivityPhoto>(),
  getPhotosByCategory: () => returnEmptyArray<ActivityPhoto>(),
  uploadPhoto: async (): Promise<ActivityPhoto> => {
    throw new Error('현재 서비스 준비중입니다.');
  }
};

// 동아리방 사진 관련 API
export const clubRoomApi = {
  getAllPhotos: () => returnEmptyArray<ClubRoomPhoto>(),
  uploadPhoto: async (): Promise<ClubRoomPhoto> => {
    throw new Error('현재 서비스 준비중입니다.');
  }
};

// 프로젝트 관련 API
export const projectApi = {
  getAllProjects: () => returnEmptyArray<Project>(),
  getProjectById: () => returnNull<Project>()
};

// 공지사항 관련 API
export const noticeApi = {
  getAllNotices: () => returnEmptyArray<Notice>(),
  getPinnedNotices: () => returnEmptyArray<Notice>()
};

// 하위 호환성을 위한 편의 함수들
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