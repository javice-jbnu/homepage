import React, { useEffect, useState } from 'react';
import { memberApi } from '../services/api';
import { Member } from '../types';

const Members: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGeneration, setSelectedGeneration] = useState<number | 'all'>('all');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const allMembers = await memberApi.getActiveMembers();
        setMembers(allMembers);
      } catch (error) {
        console.error('멤버 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // 기수별 필터링
  const filteredMembers = selectedGeneration === 'all' 
    ? members 
    : members.filter(member => member.generation === selectedGeneration);

  // 기수 목록 생성
  const generations = Array.from(new Set(members.map(m => m.generation))).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">멤버</h1>
          <p className="text-xl text-gray-600">
            JAVICE를 만들어가는 멋진 사람들을 소개합니다
          </p>
        </div>

        {/* 기수 필터 */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedGeneration('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
              selectedGeneration === 'all'
                ? 'bg-javice-blue text-white'
                : 'bg-white text-gray-700 hover:bg-javice-light hover:text-javice-blue'
            }`}
          >
            전체
          </button>
          {generations.map((generation) => (
            <button
              key={generation}
              onClick={() => setSelectedGeneration(generation)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedGeneration === generation
                  ? 'bg-javice-blue text-white'
                  : 'bg-white text-gray-700 hover:bg-javice-light hover:text-javice-blue'
              }`}
            >
              {generation}기
            </button>
          ))}
        </div>

        {/* 로딩 상태 */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-javice-blue"></div>
            <p className="mt-4 text-gray-600">멤버 정보를 불러오는 중...</p>
          </div>
        )}

        {/* 멤버 그리드 */}
        {!loading && filteredMembers.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  {member.profileImage ? (
                    <img
                      src={member.profileImage}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-javice-light flex items-center justify-center">
                      <svg className="w-16 h-16 text-javice-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <span className="text-sm bg-javice-light text-javice-blue px-2 py-1 rounded">
                      {member.generation}기
                    </span>
                  </div>
                  
                  <p className="text-sm text-javice-blue font-medium mb-1">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.major}</p>
                  
                  <p className="text-sm text-gray-700 mb-3 line-clamp-3">{member.introduction}</p>
                  
                  {/* 스킬 태그 */}
                  {member.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {member.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{member.skills.length - 3}개
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* 소셜 링크 */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(member.joinDate).getFullYear()}년 입부
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 빈 상태 */}
        {!loading && filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">아직 준비중입니다</h3>
            <p className="text-gray-600">조금만 기다려주세요!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Members; 