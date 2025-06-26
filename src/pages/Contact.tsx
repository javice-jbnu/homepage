import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    major: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 기능 준비중으로 아무것도 하지 않음
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 헤더 섹션 */}
      <section className="bg-gradient-to-r from-javice-blue to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            JAVICE 문의
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            웹 개발에 관심이 있으신가요? JAVICE와 함께 성장해보세요!
          </p>
        </div>
      </section>

      {/* 연락처 정보 & 폼 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 연락처 정보 */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  연락처 정보
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-800 text-white p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">동아리방 위치</h3>
                      <p className="text-gray-600">전북대학교 공과대학 7호관 101호</p>
                      <p className="text-sm text-gray-500">24시간 이용가능 - 디스코드 공지 채널 확인</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-800 text-white p-3 rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">이메일</h3>
                      <p className="text-gray-600">javice.contact@gmail.com</p>
                      <p className="text-sm text-gray-500">일반 문의 및 프로젝트 협업</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-800 text-white p-3 rounded-lg">
                      <div className="w-6 h-6 flex items-center justify-center text-lg font-bold">
                        #
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">동아리 지원</h3>
                      <p className="text-gray-600">Instagram DM으로 문의</p>
                      <a href="https://instagram.com/javice_jbnu" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline text-sm">
                        @javice_jbnu DM 보내기 →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 모집 정보 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📋 모집 정보</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">모집 시기:</span>
                    <span className="text-gray-600">방학 및 학기 중 (상시 모집)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">모집 대상:</span>
                    <span className="text-gray-600">전북대학교 컴인지 전공/복수전공/부전공</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">학적 상태:</span>
                    <span className="text-gray-600">재학생 또는 휴학생</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">경험 수준:</span>
                    <span className="text-gray-600">개발에 열정이 있는 누구나</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">활동비:</span>
                    <span className="text-gray-600">학기당 20,000원</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 문의 폼 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">가입 문의하기</h2>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-4 mb-6">
                <p className="text-gray-700 text-sm">
                  <strong>💡 빠른 지원:</strong> Instagram DM <a href="https://instagram.com/javice_jbnu" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline font-medium">@javice_jbnu</a>로 문의하시면 더 빠른 답변을 받으실 수 있습니다!
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-javice-blue focus:border-transparent"
                    placeholder="김자비스"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-javice-blue focus:border-transparent"
                    placeholder="your.email@jbnu.ac.kr"
                  />
                </div>

                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                    학번
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-javice-blue focus:border-transparent"
                    placeholder="202012345"
                  />
                </div>

                <div>
                  <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-2">
                    전공
                  </label>
                  <input
                    type="text"
                    id="major"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-javice-blue focus:border-transparent"
                    placeholder="컴퓨터공학부"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-javice-blue focus:border-transparent"
                    placeholder="JAVICE에 가입하고 싶은 이유나 웹 개발 경험, 궁금한 점 등을 자유롭게 작성해주세요."
                  />
                </div>

                <button
                  type="submit"
                  disabled
                  className="w-full bg-gray-200 text-gray-500 py-3 px-6 rounded-md font-semibold cursor-not-allowed"
                >
                  해당 기능은 준비중입니다
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">자주 묻는 질문</h2>
            <p className="text-gray-600">JAVICE에 대해 궁금한 점들을 정리했습니다</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "동아리 홈페이지에 왜 세부사항이 없는 것 같죠?",
                answer: "현재 홈페이지 리뉴얼 작업이 진행중이라 기초적인 프론트만 완성된 상태입니다. 조금만 기다려주세요! 그 전에 궁금한 사항은 편하게 문의 부탁드립니다."
              },
              {
                question: "프로그래밍을 처음부터 배울 수 있을까요?",
                answer: "본 동아리에서는 초보자들을 위한 정규 커리큘럼이 제공되지 않습니다. 하지만 요청시 스스로 성장할 수 있도록 스터디 및 멘토링 구성을 도와드립니다."
              },
              {
                question: "활동 시간은 어떻게 되나요?",
                answer: "의무 참석인 정기 모임은 총 2회 저녁 시간에 진행되며, 이외의 동아리방 사용 및 프로젝트 참여에는 유연하게 조정됩니다. 학업과 병행할 수 있도록 배려합니다."
              },
              {
                question: "어떤 기술을 주로 사용하게 되나요?",
                answer: "React, Node.js, 데이터베이스 등 기본적인 웹 개발을 비롯하여 다양하고 트렌디한 기술 전반을 활용합니다."
              },
              {
                question: "졸업 후에도 동아리원으로 남아있을 수 있나요?",
                answer: "네, 졸업 후에도 네트워크를 통한 취업 정보 공유, 포트폴리오 리뷰, 추천서 작성 등의 지원을 받을 수 있습니다. 또한 졸업생도 동아리 행사 참여가 가능합니다."
              },
              {
                question: "휴학생이나 복전생/부전생도 지원 가능한가요?",
                answer: "네, 전북대학교 컴퓨터인공지능학부 소속이라면 재학생 뿐만 아니라 휴학생/복전생/부전생 모두 지원 가능합니다."
              },
              {
                question: "도중에 군대에 가게 되면 어떡하죠!?",
                answer: "동아리 잔류를 희망하는 경우, 군 복무 기간이 포함되는 학기의 동아리비는 면제됩니다."
              },
              {
                question: "지원시 면접은 언제 진행되나요?",
                answer: "면접은 지원 후 1~2주 내에 진행되며, 자세한 일시는 지원자와 면접 담당자가 협의하여 결정됩니다. 면접 결과는 특별한 일이 없다면 면접 진행 후 1주 내에 공지됩니다."
              },
              {
                question: "낯을 많이 가리는데, 부원들과의 교류가 걱정됩니다...",
                answer: "걱정마세요! 기존 부원 기준 약 85%가 'I'성향을 가지고 있습니다..... (하지만 E도 환영👍)"
              },
              {
                question: "부끄러워서 동아리방을 못쓸 것 같아요...",
                answer: "걱정마세요! 다 그렇게 생각 하면서 앉아있습니다!"
              },
              {
                question: "동아리 활동을 하면서 취업 준비를 할 수 있나요?",
                answer: "네, 동아리 활동을 통해 실무 경험과 포트폴리오를 키우고, 다양한 취업 정보를 얻을 수 있습니다."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Q. {faq.question}
                </h3>
                <p className="text-gray-600">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact; 