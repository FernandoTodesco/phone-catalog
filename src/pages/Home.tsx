import { useContext, useEffect } from "react";
import Modal from "../components/molecules/Modal/Modal";
import PhonesList from "../components/molecules/PhonesList/PhonesList";
import Spinner from "../components/atoms/Spinner/Spinner";
import { AppContext } from "../contexts/AppContext";
import { getPhones } from "../services/phones";
import { Main, Title } from "./styles";

const Home = () => {
  const {
    loadingState: [loading, setLoading],
    phonesState: [phones, setPhones],
  } = useContext(AppContext);

  useEffect(() => {
    const fetchPhones = async () => {
      const res = await getPhones();
      setPhones(res);
    };
    fetchPhones();
    setLoading(() => false);
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="container">
      <Title>Phone Catalog</Title>
      <Main>
        <PhonesList />
      </Main>
      <Modal />
    </div>
  );
};

export default Home;
