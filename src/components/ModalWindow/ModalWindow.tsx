import React, { ReactNode } from 'react';
import { ReactComponent as IconCross } from '../../assets/icons/cross.svg';

type ModalWindowProps = {
  children: ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

function ModalWindow({ children, visible, setVisible }: ModalWindowProps) {
  const modalWindowClasses = [
    'fixed',
    'top-0',
    'left-0',
    'bottom-0',
    'right-0',
    'bg-slate-400/75',
    'hidden',
    'justify-center',
    'items-center',
  ];
  if (visible) {
    modalWindowClasses.push('!flex');
  }

  return (
    <div className={modalWindowClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className="max-w-[80vw] bg-white p-10 rounded-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={() => setVisible(false)}
          className="absolute p-2 hover:bg-slate-200 rounded-md translate-[-50%] right-2 top-2"
        >
          <IconCross className="w-[14px] h-[14px] opacity-60" />
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
