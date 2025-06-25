# 📊 JAVICE 웹사이트 데이터 관리 가이드

이 문서는 JAVICE 동아리 웹사이트의 데이터를 추가, 수정, 삭제하는 방법을 설명합니다.

## 🚀 빠른 시작

### 1. 초기 데이터 설정 (첫 실행 시)

```bash
# 서버 폴더로 이동
cd server

# 샘플 데이터 추가
npm run seed
```

이 명령어로 다음 데이터가 자동으로 추가됩니다:
- 👥 멤버 3명 (회장, 부회장, 스터디장)
- 📸 활동 사진 3개 (모임, 스터디, 해커톤)
- 🏠 동아리방 사진 3개
- 💻 프로젝트 2개 (홈페이지, 맛집앱)

### 2. 대화형 관리자 도구 사용

```bash
# 서버 폴더에서
npm run admin
```

메뉴가 나타나면 숫자를 입력해서 데이터를 관리할 수 있습니다.

## 📋 데이터 관리 방법들

### 🔧 방법 1: 시드 스크립트 수정 (권장)

**장점**: 한 번에 많은 데이터 추가 가능, 버전 관리 용이

1. `server/src/scripts/seedData.ts` 파일 열기
2. 원하는 데이터 추가/수정:

```typescript
// 새 멤버 추가 예시
const sampleMembers = [
  // 기존 멤버들...
  {
    name: '홍길동',
    position: '개발팀장',
    generation: 15,
    major: '컴퓨터공학부',
    email: 'hong@jbnu.ac.kr',
    github: 'https://github.com/honggildong',
    skills: ['React', 'Python'],
    projects: [],
    introduction: '안녕하세요! 풀스택 개발에 관심이 많습니다.',
    isActive: true,
    joinDate: new Date('2024-03-01')
  }
];
```

3. 데이터베이스에 반영:
```bash
npm run seed
```

### 🎮 방법 2: 대화형 CLI 도구

**장점**: 개별 데이터 추가 시 편리함

```bash
cd server
npm run admin
```

메뉴 예시:
```
🔧 JAVICE 관리자 도구
1. 멤버 추가
2. 활동 사진 추가  
3. 프로젝트 추가
4. 전체 데이터 조회
5. 종료
```

### 🌐 방법 3: REST API 호출

**장점**: 프로그래밍으로 자동화 가능

#### 멤버 추가
```bash
curl -X POST http://localhost:5000/api/members \
  -H "Content-Type: application/json" \
  -d '{
    "name": "김신입",
    "position": "멤버",
    "generation": 15,
    "major": "소프트웨어공학과",
    "email": "new@jbnu.ac.kr",
    "skills": ["JavaScript"],
    "introduction": "열심히 배우겠습니다!",
    "isActive": true
  }'
```

#### 활동 사진 추가
```bash
curl -X POST http://localhost:5000/api/activity-photos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "새로운 활동",
    "description": "활동 설명",
    "imageUrl": "https://example.com/photo.jpg",
    "category": "study",
    "tags": ["스터디", "학습"],
    "photographer": "김사진"
  }'
```

#### 프로젝트 추가
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "새 프로젝트",
    "description": "프로젝트 설명",
    "technologies": ["React", "Node.js"],
    "githubUrl": "https://github.com/project",
    "liveUrl": "https://project.com",
    "members": ["김개발", "이코딩"],
    "status": "ongoing"
  }'
```

### 💾 방법 4: MongoDB 직접 접근

**장점**: 가장 직접적이고 강력함

#### MongoDB Compass 사용 (GUI)
1. [MongoDB Compass](https://www.mongodb.com/products/compass) 설치
2. `mongodb://localhost:27017` 연결
3. `javice-club` 데이터베이스 선택
4. 컬렉션별로 데이터 추가/수정

#### MongoDB CLI 사용
```bash
# MongoDB 셸 접속
mongosh mongodb://localhost:27017/javice-club

# 멤버 추가
db.members.insertOne({
  name: "신규멤버",
  position: "멤버",
  generation: 15,
  major: "컴퓨터공학부",
  email: "new@jbnu.ac.kr",
  skills: ["JavaScript"],
  projects: [],
  introduction: "안녕하세요!",
  isActive: true,
  joinDate: new Date()
})

# 데이터 조회
db.members.find().pretty()
```

## 📂 데이터 구조

### 👤 Member (멤버)
```typescript
{
  name: string;        // 이름 (필수)
  position: string;    // 직책 (필수)
  generation: number;  // 기수 (필수)
  major: string;       // 전공 (필수)
  email?: string;      // 이메일
  github?: string;     // GitHub URL
  profileImage?: string; // 프로필 이미지 URL
  skills: string[];    // 보유 기술
  projects: string[];  // 참여 프로젝트
  introduction: string; // 자기소개 (필수)
  isActive: boolean;   // 활동 여부 (필수)
  joinDate: Date;      // 가입일 (필수)
}
```

### 📸 ActivityPhoto (활동 사진)
```typescript
{
  title: string;       // 제목 (필수)
  description: string; // 설명 (필수)
  imageUrl: string;    // 이미지 URL (필수)
  category: 'study' | 'project' | 'event' | 'meeting' | 'etc'; // 카테고리 (필수)
  tags: string[];      // 태그
  photographer?: string; // 촬영자
  uploadDate: Date;    // 업로드 날짜 (자동)
}
```

### 🏠 ClubRoomPhoto (동아리방 사진)
```typescript
{
  title: string;       // 제목 (필수)
  description: string; // 설명 (필수)
  imageUrl: string;    // 이미지 URL (필수)
  location: string;    // 동아리방 내 위치 (필수)
  uploadDate: Date;    // 업로드 날짜 (자동)
}
```

### 💻 Project (프로젝트)
```typescript
{
  title: string;       // 제목 (필수)
  description: string; // 설명 (필수)
  thumbnailUrl?: string; // 썸네일 이미지
  imageUrl?: string;   // 대표 이미지
  images: string[];    // 추가 이미지들
  technologies: string[]; // 사용 기술 (필수)
  githubUrl?: string;  // GitHub URL
  deployUrl?: string;  // 배포 URL
  liveUrl?: string;    // 라이브 URL
  members: string[];   // 참여 멤버 이름
  startDate: Date;     // 시작일 (필수)
  endDate?: Date;      // 종료일
  status: 'ongoing' | 'completed' | 'paused'; // 상태 (필수)
}
```

## 🔄 데이터 업데이트 워크플로우

### 신학기 멤버 업데이트
1. 기존 멤버들의 `isActive` 상태 확인
2. 졸업생들 `isActive: false`로 변경
3. 새 멤버들 추가
4. `generation` 번호 업데이트

### 활동 사진 정기 업데이트
1. 활동 후 사진 촬영
2. 이미지를 Cloudinary나 다른 이미지 호스팅 서비스에 업로드
3. URL을 받아서 데이터베이스에 추가
4. 적절한 카테고리와 태그 설정

### 프로젝트 관리
1. 프로젝트 시작 시 등록
2. 진행 중 상태 업데이트
3. 완료 시 `status: 'completed'`, `endDate` 설정
4. GitHub, 배포 URL 업데이트

## ⚠️ 주의사항

1. **백업**: 데이터 수정 전 반드시 백업
   ```bash
   mongodump --db javice-club --out backup/
   ```

2. **이미지 URL**: 유효한 이미지 URL인지 확인
3. **필수 필드**: 각 모델의 필수 필드 누락 방지
4. **데이터 일관성**: 멤버 이름, 프로젝트 제목 등 일관성 유지

## 🆘 문제 해결

### MongoDB 연결 실패
```bash
# MongoDB 실행 확인
brew services start mongodb-community
# 또는
sudo systemctl start mongod
```

### 포트 충돌
```bash
# 포트 사용 프로세스 확인
lsof -i :5000
# 프로세스 종료
kill -9 [PID]
```

### 데이터 초기화
```bash
# 전체 데이터 삭제 후 재설정
npm run reset-db
```

---

**💡 더 많은 도움이 필요하시면 JAVICE 개발팀에 문의하세요!** 