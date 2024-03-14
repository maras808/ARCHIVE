import { getCreateReel } from "@/src/_features/modal/cms/queries";
import Modal from "@/src/_features/modal/Modal";

export default async function Reel() {
  const cms = await getCreateReel();

  return (
    <Modal title={cms.data.create.reel.shared.title}>
      <></>
    </Modal>
  );
}
