import { useState } from "react";
// import { requies } from "../../server";
import "./Receipts.css";
import axios from "axios";
import { requies } from "../../server";

const Receipts = () => {
  // const [file, setFile] = useState(null);
  // const [material_rasmi, setMaterial_rasmi] = useState("");
  // // const [selected, setSelected] = useState(null);
  // const selected = null;
  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // console.log(file);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // if (!file) {
  //   //   alert("Iltimos, rasm tanlang!");
  //   //   return;
  //   // }

  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "javohir"); // Cloudinary upload preset

  //   // try {
  //   //   // Cloudinaryga rasm yuklash
  //   //   const cloudinaryResponse = await axios.post(
  //   //     `https://api.cloudinary.com/v1_1/dcoj8otis/image/upload`,
  //   //     formData
  //   //   );

  //   //   const cloudinaryData = cloudinaryResponse.data;
  //   //   if (cloudinaryResponse.status === 200) {
  //   //     setMaterial_rasmi(cloudinaryData.secure_url);

  //   //     // Backendga rasm URL manzilini yuborish
  //   //     const backendResponse = await requies.post("mijozlar/", {
  //   //       ism: "Javohir",
  //   //       tel_raqam: "+998 99 678 67 62",
  //   //       material_rasmi: cloudinaryData.secure_url,
  //   //     });

  //   //     if (backendResponse.status === 200) {
  //   //       alert("Rasm muvaffaqiyatli yuklandi va backendga yuborildi!");
  //   //     } else {
  //   //       alert("Rasm backendga yuborishda xatolik yuz berdi.");
  //   //     }
  //   //   } else {
  //   //     alert("Rasm yuklashda xatolik yuz berdi.");
  //   //   }
  //   // } catch (error) {
  //   //   console.error("Xatolik:", error);
  //   // }

  //   try {
  //     if (selected !== file) {
  //       // Cloudinary'ga fayl yuklash
  //       const cloudinaryResponse = await axios.post(
  //         `https://api.cloudinary.com/v1_1/dcoj8otis/image/upload`,
  //         formData
  //       );

  //       // Rasm URL'ni olish
  //       const imageUrl = cloudinaryResponse.data.secure_url;
  //       setMaterial_rasmi(imageUrl);

  //       // Backendga ma'lumot yuborish
  //       await requies.post("mijozlar/", {
  //         ism: "Javohir",
  //         tel_raqam: "+998 99 678 67 62",
  //         material_rasmi: imageUrl,
  //       });

  //       console.log("Muvaffaqiyatli yuklandi:", imageUrl);
  //     } else {
  //       await requies.post("mijozlar/", {
  //         ism: "Javohir",
  //         tel_raqam: "+998 99 678 67 62",
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Xatolik:", error);
  //   }
  // };

  const [files, setFiles] = useState({
    buyurtma_rasmi: null,
    dizayn_rasmi: null,
  });
  const [uploadedUrls, setUploadedUrls] = useState({
    buyurtma_rasmi: "",
    dizayn_rasmi: "",
  });

  // Input fayllarini olish
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prev) => ({ ...prev, [name]: files[0] }));
  };

  // Rasm yuklash funksiyasi
  const uploadToCloudinary = async (file) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "javohir"); // Cloudinary'dagi preset nomi

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dcoj8otis/image/upload`,
        formData
      );

      return res.data.secure_url;
    } catch (error) {
      console.error("Cloudinary yuklash xatosi:", error);
      return null;
    }
  };

  // Formni jo‘natish
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Har ikkala rasmni yuklash
      const buyurtmaUrl = await uploadToCloudinary(files.buyurtma_rasmi);
      const dizaynUrl = await uploadToCloudinary(files.dizayn_rasmi);

      // Yuklangan rasmlar URL'larini state-ga saqlash
      setUploadedUrls({ buyurtma_rasmi: buyurtmaUrl, dizayn_rasmi: dizaynUrl });

      // Backendga ma’lumot yuborish
      await requies.post("mijozlar/", {
        ism: "Javohir",
        tel_raqam: "+998 99 678 67 62",
        buyurtma_umumiy_summasi: "4 500 000",
        oldindan_tolov_summasi: "2 000 000",
        material_rasmi: buyurtmaUrl || "", // Agar rasm yuklanmagan bo‘lsa, bo‘sh string bo‘ladi
        dizayn_rasmi: dizaynUrl || "",
      });

      console.log("Muvaffaqiyatli yuklandi:", { buyurtmaUrl, dizaynUrl });
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input type="file" onChange={handleFileChange} />
    //     <button type="submit">Yuklash</button>
    //   </form>
    //   {material_rasmi && (
    //     <div>
    //       <h3>Yuklangan Rasm:</h3>

    //       <img src={material_rasmi} alt="Uploaded" style={{ width: "300px" }} />
    //     </div>
    //   )}
    // </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="buyurtma_rasmi" onChange={handleFileChange} />
        {uploadedUrls.buyurtma_rasmi && (
          <img
            src={uploadedUrls.buyurtma_rasmi}
            alt="Buyurtma rasmi"
            width="100"
          />
        )}

        <input type="file" name="dizayn_rasmi" onChange={handleFileChange} />
        {uploadedUrls.dizayn_rasmi && (
          <img src={uploadedUrls.dizayn_rasmi} alt="Dizayn rasmi" width="100" />
        )}

        <button type="submit">Yuklash</button>
      </form>
    </div>
  );
};

export default Receipts;
