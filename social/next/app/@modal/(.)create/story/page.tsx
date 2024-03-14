import { getCreateStory } from "@/src/_features/modal/cms/queries";
import Modal from "@/src/_features/modal/Modal";

export default async function Story() {
  const cms = await getCreateStory();

  return (
    <Modal title={cms.data.create.story.shared.title}>
      <></>
    </Modal>
  );
}
