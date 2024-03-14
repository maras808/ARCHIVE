import { getCreateEvent } from "@/src/_features/modal/cms/queries";
import Modal from "@/src/_features/modal/Modal";

export default async function Event() {
  const cms = await getCreateEvent();

  return (
    <Modal title={cms.data.create.event.shared.title}>
      <></>
    </Modal>
  );
}
