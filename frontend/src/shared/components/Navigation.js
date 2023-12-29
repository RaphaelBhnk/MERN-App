import React from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Navigation = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedModels, setLoadedModels] = useState();

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/api/models"
        );

        setLoadedModels(responseData.models);
      } catch (err) {}
    };
    fetchModels();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {isLoading && <div>{/* <LoadingSpinner /> */}</div>}
      {!isLoading && loadedModels && <ModelsList items={loadedModels} />}
    </React.Fragment>
  );
};

export default Navigation;
