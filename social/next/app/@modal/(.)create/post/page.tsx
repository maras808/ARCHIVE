import { getCreatePost } from "@/src/_features/modal/cms/queries";
import Modal from "@/src/_features/modal/Modal";

export default async function Post() {
  const cms = await getCreatePost();

  return (
    <Modal title={cms.data.create.post.shared.title}>
      <></>
    </Modal>
  );
}
