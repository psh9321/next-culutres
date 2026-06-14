# Discover Exhibitions 

## 개발 환경
 - node@24.12.0
 - pnpm@10.2.0

## 기술 스택 
 - 프레임워크 : Next.js(AppRouter)
 - 상태 관리 : react-query, zustand
 - UI / 스타일링 : styled-components
 - 언어 : TypeScript

## Architecture 
 - FSD 디자인 패턴 적용 

### 구조
 - entities : API 도메인 별 최소 단위 UI 및 API, hook, zustand store 모음
 - features : 기능이 들어간 컴포넌트 UI
 - provider : 전역 프로바이더
 - shared : 전역으로 사용되는 ui, 유틸 기능 등등
 - widgets : 페이지를 구성하는 조립 단위 UI


## Page 
 - 서버 페이지, 클라이언트 페이지로 분리
 - 화살표 함수로 생성 
 - export default 로 내보냄 

### naming 
 - Pascal + camelCase 로 네이밍 
 - Server Page 의 경우 ~PageServer 로 naming
 - Client Page 의 경우 ~PageView 로 naming

### Server Page 
 - page.tsx 로 생성
 - prefetch 및 Server API 를 호출 할 수 있음
 ```
    const IndexPageServer = () => {
        return <>IndexPageServer</>
    }

    export default IndexPageServer;
 ```

### Client Page 
 - _view.tsx 로 생성
 - "use client" 
 - shared, entities, fetures, widgets 등을 조합

 ```
    "use client"

    const IndexPageView = () => {
        return <>IndexPageView</>
    }

    export default IndexPageView;
 ```


## Component 
 - tsx 파일로 생성 
 
### naming 
 - Pascal + camelCase 로 네이밍 

### component 
 - 화살표 함수로 생성
 - export 로 내보냄 
 ```
    export const Component = () => {
        return <>Component</>
    }

 ```

## API  
 - ts 파일로 생성
 - asnyc/await function 으로 생성
 - try/catch 문으로 생성
 - try 블록에는 return 
 - catch 블록에서는 throw
 - server, client 용으로 분리 처리 
 - export 로 내보냄

### naming 
 - UPPER_SNAKE_CASE 로 네이밍 
 - 서버 페이지 및 NextApiRouter 에서 호출하는 API 인 경우 API_SERVER_~
 - fetures 의 클라이언트 컴포넌트 에서 NextApiRouter 로 호출하는 API 인 경우 API_CLIENT_~

### Client API 
 - fetures 의 클라이언트 컴포넌트 에서 NextApiRouter 로 호출 하는 API
 - only post 로 호출
 ```
    export async function API_CLIENT_CALLBACK() {
        try {
            const api = await fetch("", {
                method : "post",
                body : JSON.stringfy({data : 123}),
            });
        }
        catch(err) {
            throw err;
        }
    }
 ```

### Server API 
 - 서버 페이지 및 NextApiRouter 에서 호출하는 API

 ``` 
    export async function API_SERVER_CALLBACK() {
        try {
            const api = await fetch("api", {
                method : "get"
            });
        }
        catch(err) {
            throw err;
        }
    }
 ```


## Types 
 - declare 로 내보내 별도의 import 없이 전역으로 사용

### naming 
 - UPPER_SNAKE_CASE 로 네이밍 