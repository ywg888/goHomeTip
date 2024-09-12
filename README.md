# 启动步骤
## 添加配置文件
在根目录添加.env配置文件，并添加如下两个配置
```
# 高德应用的key
GD_KEY = ''

# woa的机器人webhook地址
WOA_WEBHOOK_URL = ''
```

## 安装依赖
npm i

## 启动
直接启动
1. npm run start

打包后启动
1. npm run build
2. cd ./dist
3. node ./bundle