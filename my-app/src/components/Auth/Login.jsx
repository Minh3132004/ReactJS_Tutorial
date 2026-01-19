

import { useState } from "react";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";
import "./Auth.scss";

const Login = ({ onLogin, onForgotPassword, onRegister }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-logo">
                    <FaUserCircle size={56} color="#6366f1" />
                </div>
                <h2>Đăng nhập</h2>
                <div className="auth-subtitle">Chào mừng bạn quay lại! Vui lòng đăng nhập để tiếp tục.</div>
                <div className="form-group input-icon">
                    <label>Email</label>
                    <div className="input-wrapper">
                        <FaEnvelope className="input-icon-left" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Nhập email"
                        />
                    </div>
                </div>
                <div className="form-group input-icon">
                    <label>Mật khẩu</label>
                    <div className="input-wrapper">
                        <FaLock className="input-icon-left" />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
                <div className="auth-links">
                    <span className="link" onClick={onForgotPassword}>Quên mật khẩu?</span>
                    <span className="link" onClick={onRegister}>Đăng ký</span>
                </div>
            </form>
        </div>
    );
};

export default Login;