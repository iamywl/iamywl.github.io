#!/bin/bash

# 변경사항이 있는지 확인
if [ -z "$(git status --porcelain)" ]; then 
  echo "변경사항이 없습니다."
else 
  git add .
  git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin main
  
  echo "--------------------------------------------------------"
  echo "✅ 푸시 완료! GitHub Actions 배포가 완료될 때까지(약 1~2분) 기다려주세요."
  echo "👉 https://iamywl.github.io 접속 후 'Ctrl + Shift + R' (강력 새로고침)을 해보세요."
fi