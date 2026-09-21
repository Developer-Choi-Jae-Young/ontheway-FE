import './App.css'
// ===== 페이지 =====
import LoginPage from './pages/CustomLoginPage.tsx'
import SignUpPage from './pages/CustomSignUpPage.tsx'
import HomePage from './pages/CustomHomePage.tsx'
import RouteDetailPage from './pages/CustomRouteDetailPage.tsx'
import Request from './pages/Request.tsx'
import MyPage from './pages/CustomMyPage.tsx'
import ReviewPage from './pages/CustomReviewPage.tsx'
import ReviewWritePage from './pages/CustomReviewWritePage.tsx'
import WithdrawlPage from './pages/CustomWithdrawlPage.tsx'
import ReportPostPage from './pages/CustomReportPostPage.tsx'
import ReportUserPage from './pages/CustomReportUserPage.tsx'
import ProfileEdit from './pages/CustomProfileEditPage.tsx'

// 이예진 페이지
import FindId from './pages/FindId'
import FindPw from './pages/FindPw'
import Agree from './pages/Agree.tsx'
import PathSetup from './pages/PathSetup.tsx'
import CreateRequest from './pages/CreateRequest.tsx'
import UsageHistory from './pages/UsageHistory.tsx'
import MyPosts from './pages/MyPosts.tsx'
import RequestDetail from './pages/RequestDetail.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/agree" element={<Agree />} />
          <Route path="/find/id" element={<FindId />} />
          <Route path="/find/pw" element={<FindPw />} />
          <Route path="/user/report" element={<ReportUserPage/>} />
          <Route path="/board/report" element={<ReportPostPage/>} />
          <Route path="/delivery/write" element={<PathSetup />} />
          <Route path="/delivery/detail/:id" element={<RouteDetailPage />} />
          <Route path="/delivery/request" element={<Request />} />
          <Route path="/product/write" element={<CreateRequest />} />
          <Route path="/product/detail/:id" element={<RequestDetail />} />
          <Route path="/history" element={<UsageHistory />} />
          <Route path="/my/post" element={<MyPosts />} />
          <Route path="/my/page" element={<MyPage/>} />
          <Route path="/with-draw" element={<WithdrawlPage/>} />
          <Route path="/my/review" element={<ReviewPage/>} />
          <Route path="/my/profile" element={<ProfileEdit />} />
          <Route path="/my/profile/edit" element={<ProfileEdit/>} />
          <Route path="/review/write" element={<ReviewWritePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
 
export default App
 