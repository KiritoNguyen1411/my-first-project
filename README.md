# 🛍️ Shoo — Modern E-Commerce Website

**Shoo** là một website thương mại điện tử được xây dựng với mục tiêu mang đến trải nghiệm mua sắm hiện đại, nhanh chóng và thân thiện với người dùng.  
Dự án được phát triển bằng **ReactJS (frontend)** và **NodeJS/ExpressJS (backend)**, kết hợp với **MySQL hoặc MongoDB** để lưu trữ dữ liệu.

---

## 🚀 Tính năng chính

- 👤 **Đăng ký / Đăng nhập** người dùng  
- 🛒 **Thêm, xem và quản lý giỏ hàng**  
- 💳 **Thanh toán và quản lý đơn hàng**  
- 🔍 **Tìm kiếm và lọc sản phẩm**  
- 📱 **Giao diện responsive**, tối ưu cho cả máy tính và điện thoại  
- ⚙️ **Quản trị viên** có thể thêm, sửa, xóa sản phẩm  

---

## 🧩 Công nghệ sử dụng

| Thành phần | Công nghệ |
|-------------|------------|
| **Frontend** | HTML, CSS, JavaScript, ReactJS |
| **Backend** | NodeJS, ExpressJS |
| **Database** | MySQL hoặc MongoDB |
| **Other Tools** | Git & GitHub, RESTful API |

---

## 🏗️ Kiến trúc tổng quan

```
Frontend (ReactJS)
        ↓
   RESTful API
        ↓
Backend (NodeJS / Express)
        ↓
Database (MySQL or MongoDB)
```

---

## ⚙️ Cài đặt và chạy project

### 1️⃣ Clone project
```bash
git clone https://github.com/your-username/shoo.git
cd shoo
```

### 2️⃣ Cài đặt dependencies
#### Frontend:
```bash
cd client
npm install
```
#### Backend:
```bash
cd server
npm install
```

### 3️⃣ Cấu hình cơ sở dữ liệu
- Tạo file `.env` trong thư mục `server` với nội dung ví dụ:
```env
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=shoo_db
JWT_SECRET=your_secret_key
```

### 4️⃣ Chạy ứng dụng
```bash
# Chạy frontend
cd client
npm start

# Chạy backend
cd server
npm run dev
```


## 🧠 Hướng phát triển tiếp theo

- Thêm chức năng thanh toán trực tuyến (PayPal, Stripe, v.v.)
- Tối ưu SEO và tốc độ tải trang
- Nâng cấp hệ thống quản trị sản phẩm
- Thêm chế độ “Dark Mode” và hệ thống đánh giá sản phẩm ⭐

---

## 👨‍💻 Tác giả

**Nguyễn Thế Nam**  
📧 Email: kiritonguyen1411lh@gmail.com  
🌐 GitHub: https://github.com/KiritoNguyen1411

**Lê Minh Hiếu**  
📧 Email:  
🌐 GitHub: 
---


> 💡 *Shoo — Mua sắm dễ dàng, tiện lợi và nhanh chóng chỉ với một cú click!*
