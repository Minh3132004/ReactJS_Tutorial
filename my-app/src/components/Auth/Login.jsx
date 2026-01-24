
import { useState } from "react";
import { FaUserCircle, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../services/apiServices";
import "./Auth.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Validate email format
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!email || !password) {
            toast.error("Vui lòng nhập đầy đủ email và mật khẩu!");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Email không hợp lệ!");
            return;
        }

        if (password.length < 6) {
            toast.error("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        setIsLoading(true);

        try {
            const response = await login(email, password);

            // Kiểm tra response từ API
            if (response && response.EC === 0) {
                // Lưu thông tin user và token vào localStorage
                const userData = response.DT;
                localStorage.setItem("access_token", userData.access_token);
                localStorage.setItem("user", JSON.stringify({
                    id: userData.id,
                    email: userData.email,
                    username: userData.username,
                    role: userData.role,
                    image: userData.image
                }));

                toast.success("Đăng nhập thành công!");

                // Chuyển hướng dựa vào role
                if (userData.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                // Hiển thị lỗi từ API
                toast.error(response?.EM || "Đăng nhập thất bại!");
            }
        } catch (error) {
            console.error("Login error:", error);
            // Hiển thị lỗi
            if (error?.EM) {
                toast.error(error.EM);
            } else {
                toast.error("Có lỗi xảy ra, vui lòng thử lại sau!");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleNavigateRegister = () => {
        navigate("/register");
    };

    const handleNavigateForgotPassword = () => {
        toast.info("Chức năng đang phát triển!");
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
                    <label htmlFor="email-input">Email</label>
                    <div className="input-wrapper">
                        <FaEnvelope className="input-icon-left" />
                        <input
                            id="email-input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Nhập email"
                            disabled={isLoading}
                        />
                    </div>
                </div>
                <div className="form-group input-icon">
                    <label htmlFor="password-input">Mật khẩu</label>
                    <div className="input-wrapper">
                        <FaLock className="input-icon-left" />
                        <input
                            id="password-input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Nhập mật khẩu"
                            disabled={isLoading}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <FaSpinner className="spinner" /> Đang xử lý...
                        </>
                    ) : (
                        "Đăng nhập"
                    )}
                </button>
                <div className="auth-links">
                    <span className="link" onClick={handleNavigateForgotPassword}>Quên mật khẩu?</span>
                    <span className="link" onClick={handleNavigateRegister}>Đăng ký</span>
                </div>
            </form>
        </div>
    );
};

export default Login;