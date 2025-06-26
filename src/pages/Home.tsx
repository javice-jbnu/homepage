import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { noticeApi } from '../services/api';
import { Notice } from '../types';

const Home: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const pinnedNotices = await noticeApi.getPinnedNotices();
        setNotices(pinnedNotices.slice(0, 3)); // 최대 3개만 표시
      } catch (error) {
        console.error('공지사항 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* 메인 로고 */}
              <div className="mb-8">
                <img 
                  src={`${process.env.PUBLIC_URL}/homepage/javice-logo-tp.png`} 
                  alt="JAVICE 로고" 
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto object-contain filter drop-shadow-2xl"
                />
              </div>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* 동아리 개요 */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">🤔 우리는 누구인가요?</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  &nbsp;&nbsp;자비스(JAVICE)는 "Over the Full Stack"이라는 슬로건 아래 창업의 가치를 중시하는,
                  전북대학교 컴퓨터인공지능학부 소속 웹 개발 동아리입니다. 
                  JavaScript와 Vice(보조, 도우미)의 합성어로, 서로 도우며 함께 성장한다는 의미를 담고 있습니다.
                </p>
                <p>
                  &nbsp;&nbsp;단순한 코드를 넘어서, 이야기를 담은 서비스를 만들고자 합니다. 
                  코드 라인 하나하나가 전하는 메시지와 그 뒤에 숨은 의미를 중시하며, 
                  혁신적인 아이디어와 뛰어난 협업 능력으로 미래를 내다봅니다.
                </p>
                <p>
                  &nbsp;&nbsp;2023년 8월 창설된 이후, 단순한 웹 개발을 넘어서 세상을 바꿀 수 있는 무언가를 만들고자 하는 
                  열정적인 멤버들과 함께 성장해왔습니다.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-lg text-center border border-gray-600">
                <div className="text-3xl font-bold text-white mb-2">2023.08.</div>
                <div className="text-gray-300">창설</div>
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-lg text-center border border-gray-600">
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-300">현재 멤버</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">기술 스택</h2>
            <p className="text-gray-300">JAVICE에서 사용하는 주요 기술들입니다</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 text-center border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.099 2.21-.099zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">프론트엔드</h3>
              <p className="text-gray-300 mb-4">React.js</p>
              <p className="text-sm text-gray-400">
                사용자 인터페이스 구축을 위한 
                현대적인 JavaScript 라이브러리
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 text-center border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36L12.78 2.05c-.23-.13-.51-.2-.78-.2zm0 1.5c.1 0 .2.03.28.08l6.44 3.72L12 10.9 5.28 7.15l6.44-3.72c.08-.05.18-.08.28-.08zM5 8.46l6.5 3.75v7.5l-6.16-3.56c-.22-.13-.34-.36-.34-.61V8.46zm8 11.25v-7.5L19 8.46v7.08c0 .25-.12.48-.34.61L13 19.71z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">백엔드</h3>
              <p className="text-gray-300 mb-4">Node.js</p>
              <p className="text-sm text-gray-400">
                서버 사이드 개발을 위한 
                JavaScript 런타임 환경
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 동아리 활동 */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">이런 활동을 합니다</h2>
            <p className="text-gray-300">우리 동아리의 핵심 가치를 소개합니다</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 지속적인 성장 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-8 border border-gray-600">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">지속적인 성장</h3>
              <p className="text-gray-300 mb-6 text-center">
                공모전 참여를 적극적으로 독려하여 개개인의 발전을 도모합니다.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• 각종 프로그래밍 대회 다수 입상</p>
                <p>• 해커톤 참여 및 수상</p>
                <p>• 동아리 연합 해커톤 개최</p>
                <p>• SW 사업단 창업 동아리 지원 프로그램 참여</p>
                <p>• SW 사업단 전공 동아리 지원 프로그램 참여</p>
                <p>• 데이터혁신공유대학 동아리 지원 프로그램 참여</p>
                <p>• 오픈소스 관련 활동 참여</p>
                <p>• 창업 아이디어 경진대회 참여</p>
              </div>
            </div>
            
            {/* 가치 창출 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-8 border border-gray-600">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">가치 창출</h3>
              <p className="text-gray-300 mb-6 text-center">
                아웃소싱 Outsourcing을 통해 효과적이고 실질적인 기술 습득과 지속적인 성취감을 지향합니다.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• 연세대학교 금융공학연구실 LPPL 프로그램 외주 제작</p>
                <p>• 유기적인 스터디 구성을 통한 상호 보완 시스템</p>
                <p>(추가 예정)</p>
              </div>
            </div>
            
            {/* 네트워크 형성 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-8 border border-gray-600">
              <div className="w-16 h-16 bg-gradient-to-r from-black to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">네트워크 형성</h3>
              <p className="text-gray-300 mb-6 text-center">
                적당한 친목활동을 통하여 동아리 전체의 발전을 도모합니다.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• 동아리 MT 및 단체 회식</p>
                <p>• 정기적인 E-sport 관람</p>
                <p>• 주기적인 봉사활동 참여</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">함께 성장할 준비가 되셨나요?</h2>
          <p className="text-xl text-gray-300 mb-8">
            JAVICE와 함께 웹개발의 새로운 세계를 경험해보세요
          </p>
          <div className="space-x-4">
            <Link
              to="/members"
              className="inline-block bg-gradient-to-r from-white to-gray-200 text-black px-8 py-3 rounded-lg font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-200 shadow-lg"
            >
              멤버 보기
            </Link>
            <a
              href="https://instagram.com/javice_jbnu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200"
            >
              Instagram DM으로 지원하기
            </a>
          </div>
        </div>
      </section>

      {/* 최신 공지사항 */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">최신 소식</h2>
            <p className="text-gray-300">JAVICE의 최근 활동과 소식을 확인하세요</p>
          </div>
          
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">아직 준비중입니다</h3>
            <p className="text-gray-300">공지사항 서비스를 준비 중입니다. 조금만 기다려주세요!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 