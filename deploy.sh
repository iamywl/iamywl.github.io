#!/bin/bash

# 변경사항이 있는지 확인
if [ -z "$(git status --porcelain)" ]; then 
  echo "변경사항이 없습니다."
else 
  # 배포 시간 기록을 위한 Placeholder
  PLACEHOLDER="__DEPLOY_TIMESTAMP__"
  
  # 배포 시간 기록
  TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
  echo "배포 시간 기록: ${TIMESTAMP}"
  
  # 원본 백업
  cp index.html index.html.tmp
  
  # 타임스탬프 치환
  sed "s/${PLACEHOLDER}/${TIMESTAMP}/g" index.html.tmp > index.html

  git add .
  git commit -m "Deploy: ${TIMESTAMP}"
  git push origin main
  
  # 원본 파일 복원 (Placeholder 유지)
  mv index.html.tmp index.html

  echo "--------------------------------------------------------"
  echo "✅ 푸시 완료! GitHub Actions 배포가 완료될 때까지(약 1~2분) 기다려주세요."
  echo "👉 https://iamywl.github.io 접속 후 'Ctrl + Shift + R' (강력 새로고침)을 해보세요."
fi