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
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10, 
    },
    headerName: {
        fontSize: 16,
        color: "#555",
    },
    programs: {
        width: "90%",
        marginVertical: 20,
        alignItems: "center", // จัดให้อยู่ตรงกลาง
    },
    programCard: {
        width: "100%",
        padding: 10,
        alignItems: "center",
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
        gap: 10,
    },
    result: {
        fontSize: 18,
        marginTop: 20,
        color: '#333',
        textAlign: "center", // จัดข้อความให้อยู่ตรงกลาง
    },
});

export default styles;