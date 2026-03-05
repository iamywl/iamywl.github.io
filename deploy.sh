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
  # macOS와 Linux 호환을 위해 sed 사용
  sed -i.bak "s/${PLACEHOLDER}/${TIMESTAMP}/g" index.html

  git add .
  git commit -m "Deploy: ${TIMESTAMP}"
  git push origin main
  
  # 원본 파일 복원 (Placeholder 유지) 및 백업 파일 삭제
  mv index.html.bak index.html

  echo "--------------------------------------------------------"
  echo "✅ 푸시 완료! GitHub Actions 배포가 완료될 때까지(약 1~2분) 기다려주세요."
  echo "👉 https://iamywl.github.io 접속 후 'Ctrl + Shift + R' (강력 새로고침)을 해보세요."
fi