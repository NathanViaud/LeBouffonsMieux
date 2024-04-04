<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ref } from 'vue';
import { useToast } from '@/components/ui/toast/use-toast';

const { toast } = useToast();

const emits = defineEmits<{
    (e: 'save', value: number): void;
}>();

defineProps<{
    label: string;
    variant: 'primary' | 'outline'
}>();

const quantity = ref(0);

function save() {
    emits('save', quantity.value);
    toast({
        title: 'Product correclty added',
        description: `${quantity.value}`,
    });
}
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <!--! the variant primary doesn't exist so we have to do this-->
            <Button v-if="variant === 'primary'" @click.stop class="w-fit">
                {{ label }}
            </Button>
            <Button v-else :variant="variant" @click.stop class="w-fit">
                {{ label }}
            </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add Product</DialogTitle>
                <DialogDescription>
                    Enter the quantity to add
                </DialogDescription>
            </DialogHeader>
            <div class="flex items-center gap-4">
                <Label for="quantity">
                    Quantity
                </Label>
                <Input v-model="quantity" id="quantity" class="flex-1" type="number" />
            </div>
            <DialogFooter>
                <DialogClose as-child>
                    <Button type="submit" @click="save">
                        Save changes
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>