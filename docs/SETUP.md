# JAVICE 동아리 홈페이지 설정 가이드

## 📋 목차
1. [요구사항](#요구사항)
2. [환경 설정](#환경-설정)
3. [데이터베이스 설정](#데이터베이스-설정)
4. [Cloudinary 설정](#cloudinary-설정)
5. [개발 서버 실행](#개발-서버-실행)
6. [배포](#배포)

## 🔧 요구사항

### 필수 소프트웨어
- **Node.js**: v18.0.0 이상
- **npm**: v8.0.0 이상
- **MongoDB**: v6.0 이상 (로컬) 또는 MongoDB Atlas (클라우드)
- **Git**: 최신 버전

### 권장 도구
- **VS Code**: 코드 에디터
- **MongoDB Compass**: MongoDB GUI 도구
- **Postman**: API 테스트 도구

## ⚙️ 환경 설정

### 1. 저장소 클론
```bash
git clone https://github.com/JBNU-JAVICE/javice-jbnu.github.io.git
cd javice-jbnu.github.io
```

### 2. 의존성 설치
```bash
# 루트에서 모든 의존성 설치
npm run install:all
```

### 3. 환경 변수 설정
```bash
# 서버 환경 변수 파일 생성
cp server/.env.example server/.env
```

`server/.env` 파일을 편집하여 다음 값들을 설정하세요:

```env
# 서버 설정
NODE_ENV=development
PORT=5000

# MongoDB 연결
MONGODB_URI=mongodb://localhost:27017/javice
# 또는 MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/javice

# JWT 설정
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Cloudinary 설정
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# CORS 설정
CLIENT_URL=http://localhost:3000
```

## 🗄️ 데이터베이스 설정

### 옵션 1: 로컬 MongoDB
1. MongoDB 설치 및 실행
```bash
# macOS (Homebrew)
brew install mongodb-community
brew services start mongodb-community

# Ubuntu
sudo apt install mongodb
sudo systemctl start mongodb

# Windows
# MongoDB 공식 사이트에서 설치 파일 다운로드
```

2. 데이터베이스 생성
```bash
mongosh
use javice
```

### 옵션 2: MongoDB Atlas (권장)
1. [MongoDB Atlas](https://www.mongodb.com/atlas) 회원가입
2. 새 클러스터 생성
3. 데이터베이스 사용자 생성
4. IP 화이트리스트 설정
5. 연결 문자열 복사 후 `.env` 파일에 설정

## ☁️ Cloudinary 설정

이미지 업로드를 위해 Cloudinary 설정이 필요합니다:

1. [Cloudinary](https://cloudinary.com) 회원가입
2. Dashboard에서 다음 정보 확인:
   - Cloud Name
   - API Key
   - API Secret
3. `.env` 파일에 설정

## 🚀 개발 서버 실행

### 전체 애플리케이션 실행
```bash
npm run dev
```

### 개별 실행
```bash
# 클라이언트만 실행 (포트 3000)
npm run client:dev

# 서버만 실행 (포트 5000)
npm run server:dev
```

### 브라우저 접속
- **프론트엔드**: http://localhost:3000
- **백엔드 API**: http://localhost:5000

## 📱 주요 페이지

- **홈페이지**: `/` - 동아리 소개 및 최신 소식
- **About**: `/about` - 동아리 역사 및 비전
- **멤버**: `/members` - 현재 활동 멤버들
- **활동 갤러리**: `/activity-gallery` - 동아리 활동 사진
- **동아리방**: `/clubroom` - 동아리방 소개 및 사진
- **프로젝트**: `/projects` - 멤버 프로젝트 쇼케이스
- **연락처**: `/contact` - 동아리 가입 문의

## 📊 API 엔드포인트

### 멤버 관련
- `GET /api/members` - 모든 멤버 조회
- `GET /api/members/active` - 활성 멤버 조회
- `GET /api/members/generation/:generation` - 기수별 멤버 조회

### 활동 사진 관련
- `GET /api/activity-photos` - 모든 활동 사진 조회
- `GET /api/activity-photos/category/:category` - 카테고리별 사진 조회
- `POST /api/activity-photos` - 사진 업로드

### 동아리방 사진 관련
- `GET /api/clubroom-photos` - 모든 동아리방 사진 조회
- `POST /api/clubroom-photos` - 동아리방 사진 업로드

## 🏗️ 빌드 및 배포

### 프로덕션 빌드
```bash
npm run build
```

### 프로덕션 서버 실행
```bash
npm start
```

### GitHub Pages 배포
```bash
# 클라이언트 빌드 후 gh-pages 브랜치에 배포
cd client
npm run build
npm run deploy
```

## 🐛 문제 해결

### 자주 발생하는 문제

1. **MongoDB 연결 실패**
   - MongoDB 서버가 실행 중인지 확인
   - 연결 문자열이 올바른지 확인
   - 방화벽 설정 확인

2. **이미지 업로드 실패**
   - Cloudinary 설정 확인
   - API 키가 올바른지 확인
   - 파일 크기 제한 확인 (5MB)

3. **CORS 에러**
   - `CLIENT_URL` 환경 변수 확인
   - 브라우저 개발자 도구에서 에러 메시지 확인

4. **포트 충돌**
   ```bash
   # 포트 사용 중인 프로세스 확인
   lsof -i :3000
   lsof -i :5000
   
   # 프로세스 종료
   kill -9 <PID>
   ```

### 로그 확인
```bash
# 서버 로그
cd server && npm run dev

# 클라이언트 로그
cd client && npm start
```

## 📞 지원

문제가 발생하면 다음 방법으로 도움을 받으세요:

1. **GitHub Issues**: 버그 리포트 및 기능 요청
2. **동아리 슬랙**: 실시간 지원
3. **이메일**: javice@jbnu.ac.kr

---

**Happy Coding! 🚀** 