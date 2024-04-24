CREATE TABLE university_employee (
    name VARCHAR(200) NULL,
    school VARCHAR(200) NULL,
    job_description VARCHAR(200) NULL,
    department VARCHAR(200) NULL,
    earnings VARCHAR(10) NULL,
    year INT NULL
);

CREATE TABLE retail_sales (
    year INT,
    month INT,
    supplier VARCHAR(200),
    item_code VARCHAR(20),
    item_description VARCHAR(200),
    item_type VARCHAR(50),
    retail_sales VARCHAR(10),
    retail_transfers VARCHAR(10),
    warehouse_sales VARCHAR(10)
);