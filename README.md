# denny1105kim.github.io

Personal site built with [Astro](https://astro.build) — minimal, light/dark, fast.

## 수정하기

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 이름, 직함, 경력, 학력, 관심분야, SNS 링크 | `src/site.ts` |
| 메인 자기소개 문단 | `src/pages/index.astro` |
| 프로필 사진 | `public/avatar.jpg` (정사각형 권장) |
| 블로그 글 추가 | `src/content/blog/*.md` |
| 프로젝트 추가 | `src/content/projects/*.md` (`_example.md` 참고, 파일명이 `_`로 시작하면 숨김) |
| 색상, 폰트 | `src/styles/global.css` |

## 로컬 실행

```bash
npm install
npm run dev   # http://localhost:4321
```

## 배포

`master` 브랜치에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가 빌드해서 GitHub Pages에 배포합니다.
레포 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 설정해야 합니다.
