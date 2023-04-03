import React, { ReactNode } from 'react';

interface IModalWindowProps {
  children: ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

function ModalWindow({ children, visible, setVisible }: IModalWindowProps) {
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
      <div className="bg-white p-6 max-w-2xl rounded-md" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
