import { TbCode, TbDeviceGamepad2, TbHome, TbHomeFilled } from "react-icons/tb";
import NavLink from "./NavLink";
import Collapse from "./Collapse";

export default function MenuItems() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-2">
        <NavLink href="/" ActiveIcon={TbHomeFilled} InactiveIcon={TbHome}>
          Home
        </NavLink>
      </div>

      <div className="border-t border-[var(--border)] mt-2 p-2">
        <Collapse
          header={
            <div className="flex items-center space-x-2">
              <TbCode className="text-2xl" />
              <div>Projects</div>
            </div>
          }
        >
          <div className="ml-4 border-l border-[var(--border)] p-2">
            <NavLink href="/projects/unsplash">Unsplash</NavLink>
          </div>
        </Collapse>
      </div>
      <div className="border-t border-[var(--border)] mt-2 p-2">
        <Collapse
          header={
            <div className="flex items-center space-x-2">
              <TbDeviceGamepad2 className="text-2xl" />
              <div>Games</div>
            </div>
          }
        >
          <div className="ml-4 border-l border-[var(--border)] p-2">
            <NavLink href="/games/tic-tac-toe">Tic Tac Toe</NavLink>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
