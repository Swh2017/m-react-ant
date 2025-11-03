import {useState} from 'react';
import "./index.css";
import {login} from "@/api/base"

export default function Login() {
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        login({
            userName: '',
            userCode: ''
        }).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
    };

    return (
        <div className="container">
            <button
                onClick={handleLogin}
                disabled={loading}
                style={{
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#1890ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                }}
            >
                {loading ? '登录中...' : '登录'}
            </button>
        </div>
    );
}
