import React, { useEffect, useState } from 'react';
import { clubRoomApi } from '../services/api';
import { ClubRoomPhoto } from '../types';

const ClubRoom: React.FC = () => {
  const [photos, setPhotos] = useState<ClubRoomPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<ClubRoomPhoto | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const roomPhotos = await clubRoomApi.getAllPhotos();
        setPhotos(roomPhotos);
      } catch (error) {
        console.error('동아리방 사진 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const openModal = (photo: ClubRoomPhoto) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-javice-black to-javice-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">동아리방</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              전북대학교 공과대학 7호관에 위치한 JAVICE 동아리방을 소개합니다
            </p>
          </div>
        </div>
      </section>

      {/* 동아리방 정보 */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">우리들의 공간</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-javice-black to-javice-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">위치</h3>
                    <p className="text-gray-300">: 전북대학교 공과대학 7호관 101호</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-javice-black to-javice-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">이용 시간</h3>
                    <p className="text-gray-300">: 평일/주말/공휴일 무관 24시간 이용가능<br />(이용 방법은 동아리 공식 디스코드 채널에서 공지 확인 바랍니다.)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-javice-black to-javice-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">시설</h3>
                    <p className="text-gray-300">: 개발용 PC, 프로젝터, 화이트 보드, 휴게공간 등</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-8 border border-gray-600">
              <h3 className="text-xl font-semibold text-white mb-4">⚠️ 주요 특징 ⚠️</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  아늑하고 자유로운 분위기
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  공간 활용 매우 환영 - 개인 스터디 / 소모임 / 팀 프로젝트
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  슬리퍼, 우산, 간식, 커피, 보드게임 등 각종 물품 상시 구비
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  깨끗하게 사용 후 정리정돈 필수
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 동아리방 사진 갤러리 */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">동아리방 둘러보기</h2>
            <p className="text-gray-300">사진으로 보는 JAVICE 동아리방의 모습</p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              <p className="mt-4 text-gray-300">사진을 불러오는 중...</p>
            </div>
          ) : photos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div
                  key={photo._id}
                  className="group cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-200"
                  onClick={() => openModal(photo)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-1">{photo.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{photo.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white font-medium">{photo.location}</span>
                      <span className="text-gray-400">
                        {new Date(photo.uploadDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">아직 준비중입니다</h3>
              <p className="text-gray-300">조금만 기다려주세요!</p>
            </div>
          )}
        </div>
      </section>

      {/* 사진 상세 모달 */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg max-w-4xl max-h-full overflow-auto border border-gray-700">
            <div className="relative">
              <button
                onClick={closeModal}
                aria-label="동아리방 사진 모달 닫기"
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h2>
              <p className="text-gray-300 mb-4">{selectedPhoto.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>위치: {selectedPhoto.location}</span>
                <span>업로드: {new Date(selectedPhoto.uploadDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubRoom; 