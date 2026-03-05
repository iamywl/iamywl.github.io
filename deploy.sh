#!/bin/bash

# 변경사항이 있는지 확인
if [ -z "$(git status --porcelain)" ]; then 
  echo "변경사항이 없습니다."
else 
  git add .
  git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
  git push origin main
  
  echo "--------------------------------------------------------"
  echo "✅ 푸시 완료! 잠시 후 https://iamywl.github.io 에서 확인하세요."
fi