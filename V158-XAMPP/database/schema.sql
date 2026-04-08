CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(120) NOT NULL,
    last_name VARCHAR(120) NOT NULL,
    email_hash CHAR(64) NOT NULL UNIQUE,
    email_encrypted TEXT NOT NULL,
    id_type VARCHAR(2) NOT NULL,
    id_hash CHAR(64) NOT NULL UNIQUE,
    id_encrypted TEXT NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    must_change_password TINYINT(1) NOT NULL DEFAULT 0,
    status ENUM('active','blocked') NOT NULL DEFAULT 'active',
    created_via ENUM('modal','checkout') NOT NULL DEFAULT 'modal',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS user_orders (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    ticket VARCHAR(64) NOT NULL,
    shipping_method VARCHAR(30) NOT NULL,
    total_usd DECIMAL(12,2) NOT NULL DEFAULT 0,
    total_bs DECIMAL(14,2) NULL DEFAULT NULL,
    status VARCHAR(40) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_orders_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_orders_user_id (user_id),
    INDEX idx_user_orders_ticket (ticket)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
