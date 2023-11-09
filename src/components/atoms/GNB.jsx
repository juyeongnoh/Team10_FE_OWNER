import { Link, useLocation, useNavigate } from "react-router-dom";
import Image from "./Image";
import Logo from "/logo.svg";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";

/**
 * GNB 컴포넌트
 *
 * 사장님 사이트에서 전역적으로 상단에 표시되는 네비게이션 바입니다.
 */

const GNB = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);

  const menus = [
    {
      label: "매출관리",
      path: "/sales",
    },
    {
      label: "매장관리",
      path: "/manage",
    },
  ];

  return (
    <nav className="fixed top-0 z-50 flex w-full h-24 bg-white border-b border-gray-300 min-w-min">
      <div className="w-[1280px] flex items-center justify-between mx-auto px-4">
        <section className="flex items-center gap-8">
          <Link to="/">
            <Image src={Logo} alt="뽀득뽀득 사장님 페이지 로고" />
          </Link>

          <div>
            {menus.map((menu, index) => (
              <Link
                className={`text-xl p-6 rounded-t-xl hover:bg-gray-100 ${
                  location.pathname.startsWith(menu.path) &&
                  "border-b-8 border-primary text-primary"
                } `}
                key={index}
                to={menu.path}>
                {menu.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="flex gap-6">
          <div className="text-right">
            <div className="text-xl">{userName} 사장님</div>
            <Button
              className="text-gray-500"
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}>
              로그아웃
            </Button>
          </div>
          <Button
            variant="cta"
            onClick={() => {
              navigate("/register");
            }}>
            입점하기
          </Button>
        </section>
      </div>
    </nav>
  );
};

export default GNB;
