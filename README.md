# JAVICE 동아리 홈페이지

![JAVICE 로고](public/javice-logo-tp-l.png)

## 전북대학교 웹개발 동아리 JAVICE
### *"Over the Full Stack"*

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)](https://javice-jbnu.github.io/homepage/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.6-blue)](https://tailwindcss.com/)

---

## 📋 프로젝트 개요

JAVICE는 전북대학교의 웹개발 동아리로, 이야기를 담은 서비스를 만드는 창업 지향 동아리입니다.

**현재 상태**: 임시 프론트엔드 페이지
- ✅ **프론트엔드**: React + TypeScript + Tailwind CSS로 구현 완료
- ⏳ **백엔드**: 추후 Node.js + Express + MongoDB로 구축 예정
- 📱 **배포**: GitHub Pages를 통한 정적 사이트 배포

## 🛠️ 기술 스택

### Frontend (현재)
- **React** 18.2.0
- **TypeScript** 4.9.5
- **Tailwind CSS** 3.3.6
- **React Router** 6.20.1

### Backend (예정)
- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** 인증
- **Cloudinary** 이미지 저장
- **TypeScript**

## 🚀 빠른 시작

### 사전 요구사항
- Node.js (v16 이상)
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/javice-jbnu/homepage.git
cd homepage

# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm start

# 프로덕션 빌드
npm run build

# 테스트 실행
npm test

# GitHub Pages 배포
npm run deploy
```

## 📁 프로젝트 구조

```
homepage/
├── public/                  # 정적 파일
│   ├── index.html          # HTML 템플릿
│   ├── favicon.png         # 파비콘
│   └── javice-logo-*.png   # 로고 이미지들
├── src/                    # 소스 코드
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx      # 상단 네비게이션
│   │   └── Footer.tsx      # 하단 푸터
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── Home.tsx       # 메인 페이지
│   │   ├── Members.tsx    # 멤버 소개 페이지
│   │   ├── Projects.tsx   # 프로젝트 페이지
│   │   ├── Contact.tsx    # 연락처 페이지
│   │   ├── ClubRoom.tsx   # 동아리방 소개
│   │   └── ActivityGallery.tsx # 활동 갤러리
│   ├── services/          # API 서비스 (현재 비활성화)
│   ├── types/             # TypeScript 타입 정의
│   ├── App.tsx            # 메인 앱 컴포넌트
│   ├── index.tsx          # 앱 진입점
│   └── index.css          # 글로벌 스타일
├── docs/                  # 문서화
├── .gitignore            # Git 무시 파일
├── package.json          # 프로젝트 설정
├── tailwind.config.js    # Tailwind CSS 설정
└── tsconfig.json         # TypeScript 설정
```

## 🎨 개발 가이드라인

### 코딩 컨벤션

#### TypeScript/React
- **컴포넌트명**: PascalCase (`MyComponent.tsx`)
- **함수/변수명**: camelCase (`useState`, `handleClick`)
- **상수명**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **폴더명**: kebab-case (`activity-gallery`)

#### 컴포넌트 구조
```typescript
import React from 'react';

interface ComponentProps {
  // props 타입 정의
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 상태 관리
  // 이벤트 핸들러
  // 렌더링
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default Component;
```

#### CSS 클래스 네이밍
- Tailwind CSS 우선 사용
- 커스텀 CSS가 필요한 경우 BEM 방식 적용
- 색상은 `javice-*` 커스텀 색상 팔레트 사용

### 디렉토리 규칙
- `components/`: 재사용 가능한 UI 컴포넌트
- `pages/`: 라우팅되는 페이지 컴포넌트
- `services/`: API 호출 및 외부 서비스 연동
- `types/`: TypeScript 인터페이스 및 타입 정의
- `utils/`: 유틸리티 함수들

## 📝 커밋 메시지 규칙

### 기본 형식
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 종류
| Type | 설명 | 예시 |
|------|------|------|
| `feat` | 새로운 기능 추가 | `feat(members): 멤버 프로필 카드 컴포넌트 추가` |
| `fix` | 버그 수정 | `fix(header): 모바일에서 메뉴 버튼 클릭 오류 수정` |
| `docs` | 문서 수정 | `docs(readme): 설치 가이드 업데이트` |
| `style` | 코드 포맷팅, 세미콜론 누락 등 | `style(footer): 코드 들여쓰기 정리` |
| `refactor` | 코드 리팩토링 | `refactor(components): 공통 버튼 컴포넌트로 추출` |
| `test` | 테스트 코드 추가/수정 | `test(utils): 날짜 포맷 함수 테스트 추가` |
| `chore` | 빌드 프로세스, 의존성 관리 | `chore(deps): react-router-dom 버전 업데이트` |
| `perf` | 성능 개선 | `perf(images): 이미지 로딩 최적화` |
| `ci` | CI/CD 설정 | `ci(github): 자동 배포 워크플로우 추가` |

### Scope 예시
- `header`, `footer`, `nav`: 컴포넌트명
- `members`, `projects`, `contact`: 페이지명
- `api`, `utils`, `types`: 기능 영역
- `deps`: 의존성
- `config`: 설정 파일

### Subject 작성 규칙
- 50자 이하로 작성
- 한글 또는 영어 사용 (일관성 유지)
- 마침표 없이 작성
- 명령문으로 작성 (예: "추가", "수정", "삭제")

### Body 작성 규칙 (선택사항)
- 72자마다 줄바꿈
- 변경 사항의 상세한 설명
- 왜 변경했는지에 대한 이유

### Footer 작성 규칙 (선택사항)
- Breaking Changes: `BREAKING CHANGE: API 응답 형식 변경`
- 이슈 참조: `Closes #123`, `Fixes #456`

### 커밋 메시지 예시

#### 좋은 예시
```bash
feat(members): 멤버 필터링 기능 추가

- 기수별로 멤버를 필터링할 수 있는 드롭다운 추가
- 현재 활동 중인 멤버만 보기 옵션 추가
- 검색 기능과 연동하여 동시 필터링 지원

Closes #12
```

```bash
fix(header): 모바일 반응형 메뉴 버그 수정

iPhone SE에서 메뉴가 제대로 표시되지 않는 문제 해결
```

```bash
chore(deps): Tailwind CSS 3.4.0 업데이트
```

#### 나쁜 예시
```bash
update
fix bug
add feature
수정했음
```

## 🔄 Git 워크플로우

### 브랜치 전략
- `main`: 프로덕션 배포 브랜치
- `develop`: 개발 통합 브랜치 (향후 사용)
- `feature/*`: 기능 개발 브랜치
- `hotfix/*`: 긴급 수정 브랜치

### 작업 프로세스
1. 이슈 생성 또는 할당받기
2. 브랜치 생성: `git checkout -b feature/issue-number-description`
3. 개발 및 커밋
4. Pull Request 생성
5. 코드 리뷰 후 병합

## 🌐 배포

### GitHub Pages 자동 배포
- **URL**: [https://javice-jbnu.github.io/homepage/](https://javice-jbnu.github.io/homepage/)
- **트리거**: `main` 브랜치에 push 시 자동 배포
- **빌드**: GitHub Actions 사용

### 수동 배포
```bash
npm run deploy
```

## 🤝 기여하기

### 기여 방법
1. 저장소 Fork
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'feat: amazing feature 추가'`)
4. 브랜치에 Push (`git push origin feature/amazing-feature`)
5. Pull Request 생성

### 코드 리뷰 체크리스트
- [ ] 코딩 컨벤션 준수
- [ ] TypeScript 타입 안정성
- [ ] 반응형 디자인 호환성
- [ ] 접근성 (a11y) 고려
- [ ] 성능 최적화
- [ ] 테스트 커버리지

## 📞 문의 및 지원

### 동아리 관련 문의
- **Instagram**: [@javice_jbnu](https://instagram.com/javice_jbnu)
- **위치**: 전북대학교 공과대학 7호관 101호
- **이메일**: javice.contact@gmail.com

### 기술적 문의
- **GitHub Issues**: 버그 리포트 및 기능 요청
- **GitHub Discussions**: 일반적인 질문 및 토론

---

**이야기를 담은 서비스를 만드는 JAVICE와 함께하세요!**

*Made with ❤️ by JAVICE Club*