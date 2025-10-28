import base64
import bz2
import zlib
import lzma
import gzip
from datetime import datetime
# from Crypto.Cipher import AES
# from cryptography.fernet import Fernet
# from Crypto.Cipher import ChaCha20

# 获取当前日期和时间
now = datetime.now()
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")


def try_decompress(data):
    """依次尝试 gzip、bz2、zlib、lzma 解压缩数据"""
    try:
        return gzip.decompress(data)
    except Exception:
        pass
    try:
        return bz2.decompress(data)
    except Exception:
        pass
    try:
        return zlib.decompress(data)
    except Exception:
        pass
    try:
        return lzma.decompress(data)
    except Exception:
        pass
    # 如果无法解压缩，则返回原始数据
    return data


def try_decode_base64(data):
    """尝试 base64 解码，如果失败则原样返回"""
    try:
        return base64.b64decode(data)
    except Exception:
        return data


def extract_base64_encoded(data):
    """从字符串中提取 base64.b64decode(...) 里的内容。
       支持单引号和双引号。
    """
    start_marker = "base64.b64decode("
    start_idx = data.find(start_marker)
    if start_idx == -1:
        return None  # 未找到模式

    remaining = data[start_idx + len(start_marker):]

    # 找出第一个引号（' 或 "）
    quote_char = None
    for q in ("'", '"'):
        idx = remaining.find(q)
        if idx != -1:
            quote_char = q
            break
    if not quote_char:
        return None

    open_idx = data.find(quote_char, start_idx)
    close_idx = data.find(quote_char, open_idx + 1)
    if close_idx == -1:
        return None

    encoded_segment = data[open_idx + 1:close_idx]
    return encoded_segment


def Encoded_script_decode(data):
    """预留的自定义加密类型解析"""
    return


def decrypt_nested(data):
    """循环嵌套解密：Base64 解码 + 多层压缩检测"""
    while True:
        new_data = try_decode_base64(data)
        new_data = try_decompress(new_data)

        if "exec(" in str(new_data):
            if "Encoded script" in str(new_data):
                new_data = "该加密未适配 敬请期待"
                print("该加密未适配 敬请期待")
                break
            elif "exec(" in str(new_data):
                extracted = extract_base64_encoded(str(new_data))
                if extracted is None:
                    print("无法提取 base64 数据，停止解密。")
                    break
                data = extracted
            else:
                print("未知加密，无法进一步解密。")
                new_data = "未知加密 无法进一步解密"
                break
        else:
            print("无法进一步解密，退出循环。")
            break

    return new_data


def process_data(data):
    """保证输出符合字节格式"""
    if isinstance(data, str):
        return data.encode("utf-8")
    elif isinstance(data, bytes):
        return data
    else:
        raise TypeError("Expected string or bytes-like object")


# ================= 主程序开始 =================
with open("./input.py", "r", encoding="utf-8") as file:
    content = file.read().strip()

encoded_data = extract_base64_encoded(content)
if encoded_data is None:
    print("⚠️ 未找到 base64.b64decode(...) 模式，请检查 input.py 内容。")
    exit(1)

# 解密嵌套加密数据
final_decrypted_data = decrypt_nested(encoded_data)

# 输出结果并写入文件
print("✅ 解密结果:")
print(final_decrypted_data)

with open("./output.py", "wb") as f:
    f.write(process_data(f"# {formatted_date}\n"))
    f.write(process_data(final_decrypted_data))
