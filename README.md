# 2025 Portfolio Website
<img src="https://seongjae-portfolio.netlify.app/assets/second-portfoilo-main-DsnxYHrR.png" alt="책 이미지" width="400" height="250">
<br>

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=flat-square)

> 새롭고 세련된 디자인으로 리뉴얼한 포트폴리오 웹사이트입니다.  
> 컴포넌트 재사용성과 사용자 인터페이스를 개선했습니다.

<br>
<br>

## 🔗 배포 링크

[포트폴리오 웹사이트 바로가기](https://seongjae-portfolio.netlify.app/)

<br>
<br>

## 🛠️ 기술 스택

### Frontend

- **Language:** TypeScript
- **Framework:** React
- **State Management:** Zustand
- **Styling:** SCSS
- **Build Tool:** Vite
- **Deployment:** Netlify

<br>
<br>

## 📁 프로젝트 구조

```
src/
├── assets/      # 이미지, 폰트 등 정적 파일
├── components/  # 재사용 가능한 컴포넌트
├── hooks/       # 커스텀 훅
├── library/     # 데이터 및 상수
├── pages/       # 페이지 컴포넌트
├── sections/    # 메인 페이지 섹션
└── styles/      # 전역 스타일
```

<br>
<br>

## ✨ 주요 기능

### 1. 다크모드/라이트모드

- Zustand를 활용한 전역 상태 관리
- 커스텀 훅을 통한 테마 전환 기능
- 부드러운 전환 애니메이션 구현

### 2. 반응형 디자인

- 모바일, 태블릿, 데스크톱 환경 지원
- 디바이스 크기에 따른 최적화된 레이아웃 제공
- 유동적인 그리드 시스템 적용

### 3. 인터랙티브 네비게이션

- 스크롤 방향에 따른 동적 헤더 표시/숨김
- 섹션 간 부드러운 스크롤 이동
- 현재 섹션에 따른 메뉴 하이라이트

### 4. 프로젝트 갤러리

- 프로젝트 상세 정보 제공
- 태그 기반 프로젝트 분류
- 상세 페이지 라우팅 구현

<br>
<br>

## 🎯 성능 최적화

### 이미지 최적화

- WebP 포맷 사용으로 이미지 용량 감소
- assets 폴더 활용으로 번들링 최적화
- 이미지 레이지 로딩 적용

### 렌더링 최적화

- 컴포넌트 메모이제이션
- 불필요한 리렌더링 방지
- 코드 스플리팅 적용

<br>
<br>

## 🔧 트러블 슈팅

### 1. 초기 렌더링 시 화면 깜빡임 현상

- 원인: 컬러 모드 변경 트랜지션이 초기 렌더링 시에도 적용
- 해결: 초기 렌더링 시에는 트랜지션 비활성화

### 2. 이미지 렌더링 성능

- 원인: 큰 용량의 PNG 이미지 사용
- 해결: WebP 포맷 변환 및 assets 폴더 활용

