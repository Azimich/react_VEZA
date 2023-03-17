import useHttp from "store/hooks/useHttp";

const usePostGalleryProduct = () => {
  const { request, loading, error } = useHttp();

  const postGalleryProduct = async (body: any[], alias: string) => {
    const fd = new FormData();
    body.map((d) => {
      fd.append("gallery", d);
    });
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/upload_equipment_gallery?alias=" +
        alias,
      "POST",
      fd,
    );
  };

  return { postGalleryProduct, loading, error };
};

export { usePostGalleryProduct };
