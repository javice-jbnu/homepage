import React, { useEffect, useState } from 'react';
import { activityPhotoApi } from '../services/api';
import { ActivityPhoto } from '../types';

const ActivityGallery: React.FC = () => {
  const [photos, setPhotos] = useState<ActivityPhoto[]>([]);
  const [filteredPhotos, setFilteredPhotos] = useState<ActivityPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<ActivityPhoto | null>(null);

  const categories = [
    { key: 'all', label: '전체' },
    { key: 'study', label: '스터디' },
    { key: 'project', label: '프로젝트' },
    { key: 'event', label: '이벤트' },
    { key: 'meeting', label: '회의/모임' },
    { key: 'etc', label: '기타' },
  ];

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const allPhotos = await activityPhotoApi.getAllPhotos();
        setPhotos(allPhotos);
        setFilteredPhotos(allPhotos);
      } catch (error) {
        console.error('활동 사진 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPhotos(photos);
    } else {
      const filtered = photos.filter(photo => photo.category === selectedCategory);
      setFilteredPhotos(filtered);
    }
  }, [selectedCategory, photos]);

  const openModal = (photo: ActivityPhoto) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">활동 갤러리</h1>
          <p className="text-xl text-gray-300">
            JAVICE의 다양한 활동 모습을 사진으로 만나보세요
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.key
                  ? 'bg-gradient-to-r from-black to-gray-800 text-white'
                  : 'bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 hover:from-gray-600 hover:to-gray-700 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 로딩 상태 */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="mt-4 text-gray-300">사진을 불러오는 중...</p>
          </div>
        )}

        {/* 사진 그리드 */}
        {!loading && filteredPhotos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo._id}
                className="group cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-200"
                onClick={() => openModal(photo)}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{photo.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{photo.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-javice-light text-javice-blue px-2 py-1 rounded">
                      {categories.find(cat => cat.key === photo.category)?.label}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(photo.uploadDate).toLocaleDateString()}
                    </span>
                  </div>
                  {photo.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {photo.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                      {photo.tags.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{photo.tags.length - 3}개
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 빈 상태 */}
        {!loading && filteredPhotos.length === 0 && (
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

      {/* 사진 상세 모달 */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                aria-label="사진 모달 닫기"
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedPhoto.title}</h2>
              <p className="text-gray-600 mb-4">{selectedPhoto.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-javice-light text-javice-blue px-3 py-1 rounded-full text-sm font-medium">
                  {categories.find(cat => cat.key === selectedPhoto.category)?.label}
                </span>
                <div className="text-sm text-gray-500">
                  <p>업로드: {new Date(selectedPhoto.uploadDate).toLocaleDateString()}</p>
                  {selectedPhoto.photographer && (
                    <p>촬영자: {selectedPhoto.photographer}</p>
                  )}
                </div>
              </div>
              {selectedPhoto.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedPhoto.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityGallery; 