# JAVICE 동아리 홈페이지

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)](https://javice-jbnu.github.io/homepage/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.6-blue)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> 전북대학교 웹개발 동아리 JAVICE의 공식 홈페이지  
> **"Over the Full Stack"**

## 🚀 Quick Start

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

# GitHub Pages 배포
npm run deploy
```

## 📋 프로젝트 개요

JAVICE 동아리 홈페이지는 React + TypeScript + Tailwind CSS로 구축된 반응형 웹 애플리케이션입니다.

### 주요 기능
- ✅ 동아리 소개 및 활동 내역
- ✅ 멤버 프로필 관리
- ✅ 프로젝트 포트폴리오 전시
- ✅ 활동 갤러리
- ✅ 연락처 및 지원 양식
- ✅ 동아리방 소개

## 🛠️ 기술 스택

### Core
- **React** 18.2.0 - UI 라이브러리
- **TypeScript** 4.9.5 - 정적 타입 시스템
- **React Router DOM** 6.20.1 - 클라이언트 사이드 라우팅

### Styling & UI
- **Tailwind CSS** 3.3.6 - 유틸리티 퍼스트 CSS 프레임워크
- **@tailwindcss/forms** - 폼 요소 스타일링
- **@tailwindcss/typography** - 타이포그래피 스타일링

### Development Tools
- **React Scripts** 5.0.1 - Create React App 기반 빌드 도구
- **Autoprefixer** 10.4.16 - CSS 벤더 프리픽스 자동 추가
- **PostCSS** 8.4.32 - CSS 후처리기

### Deployment
- **gh-pages** 6.1.0 - GitHub Pages 배포
- **GitHub Actions** - CI/CD 파이프라인

## 📁 프로젝트 구조

```
homepage/
├── public/                 # 정적 파일
│   ├── index.html         # HTML 템플릿
│   ├── favicon.png        # 파비콘
│   └── javice-logo-*.png  # 브랜드 로고 파일들
├── src/                   # 소스 코드
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx     # 네비게이션 헤더
│   │   └── Footer.tsx     # 푸터
│   ├── pages/            # 페이지 컴포넌트
│   │   ├── Home.tsx      # 메인 페이지
│   │   ├── Members.tsx   # 멤버 소개 페이지
│   │   ├── Projects.tsx  # 프로젝트 페이지
│   │   ├── ActivityGallery.tsx # 활동 갤러리
│   │   ├── Contact.tsx   # 연락처 페이지
│   │   └── ClubRoom.tsx  # 동아리방 소개
│   ├── services/         # API 서비스 (향후 백엔드 연동)
│   ├── types/           # TypeScript 타입 정의
│   ├── App.tsx          # 메인 앱 컴포넌트
│   ├── index.tsx        # 앱 진입점
│   └── index.css        # 글로벌 스타일
├── .gitignore           # Git 무시 파일 목록
├── package.json         # 프로젝트 설정 및 의존성
├── tailwind.config.js   # Tailwind CSS 설정
└── tsconfig.json        # TypeScript 설정
```

## 🎯 개발 가이드

### 환경 요구사항
- **Node.js** 16.14.0 이상
- **npm** 7.0.0 이상
- **Git** 2.25.0 이상

### 로컬 환경 설정

1. **저장소 클론 및 의존성 설치**
   ```bash
   git clone https://github.com/javice-jbnu/homepage.git
   cd homepage
   npm install
   ```

2. **환경 변수 설정 (필요시)**
   ```bash
   cp .env.example .env.local
   # .env.local 파일을 편집하여 필요한 환경 변수 설정
   ```

3. **개발 서버 실행**
   ```bash
   npm start
   # http://localhost:3000에서 확인 가능
   ```

### 사용 가능한 Scripts

```bash
npm start          # 개발 서버 실행
npm run build      # 프로덕션 빌드
npm test           # 테스트 실행
npm run eject      # CRA 설정 추출 (주의: 되돌릴 수 없음)
npm run predeploy  # 배포 전 빌드
npm run deploy     # GitHub Pages 배포
```

### 코드 스타일 가이드

1. **TypeScript 사용 원칙**
   - 모든 컴포넌트는 TypeScript로 작성
   - `any` 타입 사용 금지
   - Props와 State는 반드시 타입 정의

2. **컴포넌트 작성 규칙**
   ```typescript
   // 함수형 컴포넌트 + TypeScript 사용
   interface ComponentProps {
     title: string;
     isVisible?: boolean;
   }

   const Component: React.FC<ComponentProps> = ({ title, isVisible = true }) => {
     return <div>{title}</div>;
   };

   export default Component;
   ```

3. **Tailwind CSS 사용 가이드**
   - 인라인 스타일 대신 Tailwind 클래스 사용
   - 복잡한 스타일은 `@apply` 지시어로 컴포넌트화
   - 반응형 디자인은 모바일 퍼스트 접근

## 📝 커밋 메시지 규칙

### 커밋 메시지 형식

```
<타입>(<범위>): <제목>

<본문>

<푸터>
```

### 타입 (Type)

| 타입 | 설명 | 예시 |
|------|------|------|
| `feat` | 새로운 기능 추가 | `feat(auth): 로그인 기능 구현` |
| `fix` | 버그 수정 | `fix(header): 모바일에서 메뉴 깨짐 수정` |
| `docs` | 문서 수정 | `docs(readme): 설치 가이드 추가` |
| `style` | 코드 포맷팅, 세미콜론 누락 등 | `style(home): 인덴테이션 정리` |
| `refactor` | 코드 리팩토링 | `refactor(components): 공통 컴포넌트 분리` |
| `test` | 테스트 추가/수정 | `test(utils): 유틸 함수 테스트 추가` |
| `chore` | 빌드 업무, 패키지 매니저 설정 등 | `chore(deps): React 18.2.0 업데이트` |
| `perf` | 성능 개선 | `perf(images): 이미지 최적화` |
| `ci` | CI/CD 관련 | `ci(github): 자동 배포 워크플로우 추가` |
| `build` | 빌드 시스템 관련 | `build(webpack): 번들 크기 최적화` |
| `revert` | 이전 커밋 되돌리기 | `revert: "feat(auth): 로그인 기능 구현"` |

### 범위 (Scope)

- `header`: 헤더 컴포넌트
- `footer`: 푸터 컴포넌트
- `home`: 홈 페이지
- `members`: 멤버 페이지
- `projects`: 프로젝트 페이지
- `gallery`: 갤러리 페이지
- `contact`: 연락처 페이지
- `clubroom`: 동아리방 페이지
- `components`: 공통 컴포넌트
- `styles`: 스타일링
- `config`: 설정 파일
- `deps`: 의존성

### 제목 (Subject) 작성 규칙

1. **50자 이내**로 작성
2. **동사 원형**으로 시작 (한국어는 현재형)
3. **첫 글자는 소문자** (한국어 제외)
4. **마침표 금지**
5. **명령문 형태**로 작성

### 본문 (Body) 작성 규칙

1. **72자 단위**로 줄바꿈
2. **무엇을**, **왜** 변경했는지 설명
3. **어떻게**는 코드를 보면 알 수 있으므로 생략

### 푸터 (Footer)

- **Breaking Changes**: `BREAKING CHANGE: 변경 내용`
- **이슈 참조**: `Closes #123`, `Fixes #456`, `Refs #789`

### 커밋 메시지 예시

#### 좋은 예시

```bash
feat(members): 멤버 프로필 페이지 구현

- 멤버 목록 표시 기능 추가
- 개별 멤버 상세 정보 모달 구현
- 반응형 그리드 레이아웃 적용

Closes #15
```

```bash
fix(header): 모바일에서 햄버거 메뉴 동작 오류 수정

모바일 화면에서 햄버거 메뉴 클릭 시 메뉴가 표시되지 않는 
문제를 해결했습니다. z-index 충돌이 원인이었습니다.

Fixes #23
```

```bash
chore(deps): Tailwind CSS 3.3.6으로 업데이트
```

#### 나쁜 예시

```bash
# 너무 모호함
fix: 버그 수정

# 타입 없음
헤더 수정

# 너무 장황함
feat(home): 홈페이지에 새로운 섹션을 추가하고 스타일을 변경하고 반응형으로 만들었음
```

## 🚀 배포 가이드

### GitHub Pages 자동 배포

1. `main` 브랜치에 푸시하면 자동으로 배포됩니다.
2. 배포 상태는 [Actions 탭](https://github.com/javice-jbnu/homepage/actions)에서 확인 가능합니다.

### 수동 배포

```bash
npm run deploy
```

### 배포 URL
- **Production**: [https://javice-jbnu.github.io/homepage/](https://javice-jbnu.github.io/homepage/)

## 🧪 테스트

```bash
# 전체 테스트 실행
npm test

# 커버리지 포함 테스트
npm test -- --coverage

# 특정 파일 테스트
npm test -- --testPathPattern=Component.test.tsx
```

## 🐛 이슈 및 버그 리포트

[GitHub Issues](https://github.com/javice-jbnu/homepage/issues)를 통해 버그를 리포트하거나 기능을 제안해주세요.

### 이슈 템플릿

**버그 리포트**
- 현재 동작
- 예상 동작
- 재현 단계
- 스크린샷 (필요시)
- 환경 정보 (브라우저, OS 등)

**기능 제안**
- 제안하는 기능
- 사용 사례
- 예상 이점

## 🤝 기여 가이드

1. **Fork** 후 **Clone**
2. **Feature 브랜치** 생성: `git checkout -b feat/amazing-feature`
3. **커밋 메시지 규칙** 준수하여 커밋
4. **푸시**: `git push origin feat/amazing-feature`
5. **Pull Request** 생성

### Pull Request 체크리스트

- [ ] 커밋 메시지가 규칙에 맞는가?
- [ ] 코드가 TypeScript 에러 없이 빌드되는가?
- [ ] 새로운 기능에 대한 문서가 추가되었는가?
- [ ] 반응형 디자인이 적용되었는가?
- [ ] 접근성 가이드라인을 준수했는가?

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

## 👥 기여자

- **JAVICE Club Members** - 개발 및 디자인

## 📞 연락처

- **동아리**: [@javice_jbnu](https://instagram.com/javice_jbnu)
- **이슈**: [GitHub Issues](https://github.com/javice-jbnu/homepage/issues)
- **이메일**: javice.contact@gmail.com

---

**이야기를 담은 서비스를 만드는 JAVICE와 함께하세요!**

*Made with ❤️ by JAVICE Club*