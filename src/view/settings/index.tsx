export default function Settings() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>设置页面</h2>
      <p>这是另一个需要登录后才能访问的动态路由子页面。</p>
      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3>系统设置</h3>
        <ul>
          <li>账号设置</li>
          <li>安全设置</li>
          <li>通知设置</li>
        </ul>
      </div>
    </div>
  );
}