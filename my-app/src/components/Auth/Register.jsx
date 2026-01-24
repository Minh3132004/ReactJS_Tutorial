import { useState } from "react";
import { FaUserPlus, FaEnvelope, FaLock, FaUser, FaSpinner, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../services/apiServices";
import "./Auth.scss";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    // Validate email format
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!email || !username || !password || !confirmPassword) {
            toast.error("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Email không hợp lệ!");
            return;
        }

        if (username.length < 3) {
            toast.error("Tên người dùng phải có ít nhất 3 ký tự!");
            return;
        }

        if (password.length < 6) {
            toast.error("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Mật khẩu xác nhận không khớp!");
            return;
        }

        setIsLoading(true);

        try {
            const response = await register(email, username, password);

            // Kiểm tra response từ API
            if (response && response.EC === 0) {
                toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
                navigate("/login");
            } else {
                // Hiển thị lỗi từ API
                toast.error(response?.EM || "Đăng ký thất bại!");
            }
        } catch (error) {
            console.error("Register error:", error);
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

    const handleNavigateLogin = () => {
        navigate("/login");
    };

    return (
        <div className="auth-container">
            <form className="auth-form register-form" onSubmit={handleSubmit}>
                <div className="auth-logo">
                    <FaUserPlus size={56} color="#6366f1" />
                </div>
                <h2>Đăng ký</h2>
                <div className="auth-subtitle">Tạo tài khoản mới để bắt đầu trải nghiệm!</div>

                {/* Email Field */}
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

                {/* Username Field */}
                <div className="form-group input-icon">
                    <label htmlFor="username-input">Tên người dùng</label>
                    <div className="input-wrapper">
                        <FaUser className="input-icon-left" />
                        <input
                            id="username-input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Nhập tên người dùng"
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="form-group input-icon">
                    <label htmlFor="password-input">Mật khẩu</label>
                    <div className="input-wrapper">
                        <FaLock className="input-icon-left" />
                        <input
                            id="password-input"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Nhập mật khẩu"
                            disabled={isLoading}
                        />
                        <span
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>

                {/* Confirm Password Field */}
                <div className="form-group input-icon">
                    <label htmlFor="confirm-password-input">Xác nhận mật khẩu</label>
                    <div className="input-wrapper">
                        <FaLock className="input-icon-left" />
                        <input
                            id="confirm-password-input"
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Nhập lại mật khẩu"
                            disabled={isLoading}
                        />
                        <span
                            className="password-toggle"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
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
                        "Đăng ký"
                    )}
                </button>

                <div className="auth-links center">
                    <span>Đã có tài khoản? </span>
                    <span className="link" onClick={handleNavigateLogin}>Đăng nhập ngay</span>
                </div>
            </form>
        </div>
    );
};

export default Register;
