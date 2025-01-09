import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center", // จัดให้อยู่ตรงกลางแนวตั้ง
        alignItems: "center", // จัดให้อยู่ตรงกลางแนวนอน
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    header: {
        padding: 20,
        width: "100%",
        alignItems: "center", // จัดให้อยู่ตรงกลาง
        justifyContent: "center", // เพิ่มเพื่อให้อยู่กลางหน้าจอใน header
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    headerName: {
        fontSize: 16,
        color: "#555",
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    programs: {
        width: "90%",
        marginVertical: 20,
        alignItems: "center", // จัดให้อยู่ตรงกลาง
        justifyContent: "center", // เพิ่มเพื่อจัดให้อยู่กลางแนวตั้ง
    },
    programCard: {
        width: "100%",
        padding: 10,
        alignItems: "center",
        justifyContent: "center", // เพิ่มเพื่อให้อยู่กลางการ์ด
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '80%',
        marginBottom: 10,
        borderRadius: 5,
        textAlign: "center", // จัดข้อความในช่องป้อนให้อยู่ตรงกลาง
    },
    timer: {
        fontSize: 48,
        marginBottom: 20,
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "center", // จัดปุ่มให้อยู่ตรงกลาง
        alignItems: "center", // จัดให้อยู่ตรงกลางแนวตั้ง
        gap: 10,
    },
    result: {
        fontSize: 18,
        marginTop: 20,
        color: '#333',
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    label: {
        fontSize: 16,
        marginTop: 10,
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    resultText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    categoryText: {
        fontSize: 16,
        marginTop: 5,
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    card: {
        backgroundColor: "#456555",
        padding: 30,
        marginVertical: 10,
        borderRadius: 10,
        width: 300,
        alignItems: "center",
        justifyContent: "center", // จัดให้อยู่ตรงกลาง
        elevation: 3,
    },
    city: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    temperature: {
        fontSize: 16,
        marginTop: 5,
        color: "#fff",
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
    status: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
});

export default styles;
