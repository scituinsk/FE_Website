# Image Cropping Feature

Fitur cropping gambar telah ditambahkan dengan aspect ratio 16:9 yang konsisten menggunakan library `react-image-crop`.

## Library yang Digunakan

- **react-image-crop** v11.0.7 - Library untuk cropping gambar dengan fitur lengkap
- Aspect ratio dikunci pada 16:9 untuk konsistensi

## Komponen

### ImageCropper (`image-cropper.tsx`)

Komponen reusable untuk cropping gambar dengan fitur:

- ✅ Aspect ratio locked to 16:9
- ✅ Auto-calculate initial crop area
- ✅ Preview sebelum apply
- ✅ Export ke Blob dan URL
- ✅ Loading state saat processing
- ✅ High quality output (JPEG 95%)

## Cara Kerja

### 1. Upload File

User memilih file gambar melalui file input

### 2. Open Cropper

Setelah file dipilih, cropper dialog otomatis terbuka dengan:

- Preview gambar
- Crop area yang auto-adjust ke 16:9
- Drag & resize crop area

### 3. Apply Crop

User klik "Apply Crop" dan gambar akan:

- Di-crop sesuai area yang dipilih
- Di-convert ke Blob (JPEG quality 95%)
- Preview URL dibuat untuk display
- File hasil crop disimpan untuk upload

### 4. Upload (Ready for Presigned URL)

File hasil crop siap untuk:

```typescript
const presignedUrl = await getPresignedUrl(croppedFile);
await uploadToPresignedUrl(presignedUrl, croppedFile);
```

## Implementasi

### ProjectGallery

- Cropping untuk setiap gambar yang diupload
- Cropping untuk edit gambar existing
- Aspect ratio 16:9 untuk semua gambar

### ProjectBasicInfo

- Cropping untuk main image project
- Aspect ratio 16:9 locked

## Props ImageCropper

```typescript
interface ImageCropperProps {
  imageSrc: string; // URL gambar yang akan di-crop
  isOpen: boolean; // State dialog open/close
  onClose: () => void; // Handler saat dialog ditutup
  onCropComplete: (
    // Handler saat crop selesai
    croppedImageBlob: Blob, // Blob hasil crop
    croppedImageUrl: string // URL untuk preview
  ) => void;
  aspectRatio?: number; // Default: 16/9
}
```

## Styling

Cropper menggunakan default CSS dari `react-image-crop/dist/ReactCrop.css` yang sudah terintegrasi dengan theme aplikasi.
