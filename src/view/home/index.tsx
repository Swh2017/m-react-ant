export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 清除登录状态
    logout();
    // 重定向到登录页
    navigate('/login', { replace: true });
  };

  return (
      <div style={{minHeight: '100vh', backgroundColor: '#f5f5f5'}}>
          {/* 头部导航 */}
          <button
              onClick={handleLogout}>
              退出登录
          </button>
          <div>
              <Link
                  to="/home/dashboard"
                  className="nav-link">
                  仪表盘
              </Link>
          </div>
          <div className='width: 100%'>
              <Outlet/>
          </div>
      </div>
  );
}
