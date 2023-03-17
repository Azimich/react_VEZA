const useFiles = () => {
  const getFiles = async (path: string) => {
    return await fetch(path, { method: "GET" });
  };

  return { getFiles };
};

export { useFiles };
