import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTech, setSelectedTech] = useState<string>('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('프로젝트를 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = [
    { key: 'all', label: '전체' },
    { key: 'web', label: '웹 개발' },
    { key: 'mobile', label: '모바일' },
    { key: 'ai', label: 'AI/데이터' },
    { key: 'game', label: '게임' }
  ];

  const filteredProjects = selectedTech === 'all' 
    ? projects 
    : projects.filter(project => {
        // 카테고리별 필터링 로직
        switch (selectedTech) {
          case 'web':
            return project.technologies.some(tech => 
              ['react', 'vue', 'angular', 'javascript', 'typescript', 'html', 'css', 'node', 'express', 'spring', 'django', 'flask'].some(webTech =>
                tech.toLowerCase().includes(webTech)
              )
            );
          case 'mobile':
            return project.technologies.some(tech => 
              ['react native', 'flutter', 'ios', 'android', 'swift', 'kotlin', 'expo'].some(mobileTech =>
                tech.toLowerCase().includes(mobileTech)
              )
            );
          case 'ai':
            return project.technologies.some(tech => 
              ['python', 'tensorflow', 'pytorch', 'machine learning', 'deep learning', 'ai', 'data', 'pandas', 'numpy', 'jupyter'].some(aiTech =>
                tech.toLowerCase().includes(aiTech)
              )
            );
          case 'game':
            return project.technologies.some(tech => 
              ['unity', 'unreal', 'c#', 'c++', 'game', 'pygame', 'javascript'].some(gameTech =>
                tech.toLowerCase().includes(gameTech)
              )
            );
          default:
            return true;
        }
      });

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-javice-blue"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-javice-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            프로젝트 쇼케이스
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            JAVICE 멤버들이 진행한 다양한 웹 개발 프로젝트들을 만나보세요
          </p>
        </div>
      </section>

      {/* 기술 스택 필터 */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedTech(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTech === category.key
                    ? 'bg-javice-blue text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 그리드 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">아직 준비중입니다</h3>
              <p className="text-gray-600">조금만 기다려주세요!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {project.imageUrl && (
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* 기술 스택 태그 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* 참여 멤버 */}
                    {project.members && project.members.length > 0 && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-500 mb-2">참여 멤버</p>
                        <div className="flex flex-wrap gap-1">
                          {project.members.map((member, index) => (
                            <span key={index} className="text-sm text-gray-700">
                              {member}{index < project.members.length - 1 && ', '}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* 링크 버튼 */}
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                        >
                          GitHub
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-javice-blue text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-gradient-to-r from-javice-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            성장하는 개발자가 되고 싶다면?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            웹 개발에 관심이 있다면 누구나 언제든 환영합니다
          </p>
          <a
            href="https://instagram.com/javice_jbnu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            인스타그램 DM으로 지원하기
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects; 