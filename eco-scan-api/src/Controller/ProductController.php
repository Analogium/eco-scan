<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ProductRepository;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Product;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;

#[Route('/api/product', name: 'app_product_')]
#[OA\Tag(name: 'Product')]
class ProductController extends AbstractController
{
    public function __construct(
        private readonly ProductRepository $productRepository,
        private readonly EntityManagerInterface $entityManager
    )
    {}


    #[Route('/', name: 'index', methods: ['GET'])]
    #[OA\Response(
        response: 200,
        description: "Success",
        content: new OA\JsonContent(
            type: 'array',
            items: new OA\Items(
                ref: new Model(type: Product::class)
            )
        )
    )]
    public function index(): JsonResponse
    {
        $products = $this->productRepository->findAll();
        return $this->json([
            'products' => $products
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    #[OA\Response(
        response: 200,
        description: "Success",
        content: new Model(
            type: Product::class
        )
    )]
    #[OA\Parameter(
        name: "id",
        in: 'path',
        description: "Product id",
        required: true,
        schema: new OA\Schema(type: 'integer')
    )]
    public function show(int $id): JsonResponse
    {
        $product = $this->productRepository->find($id);
        return $this->json([
            'product' => $product
        ]);
    }

    #[Route('/{id}', name: 'delete', methods: ['DELETE'])]
    #[OA\Response(
        response: 200,
        description: "Success",
        content: new Model(
            type: Product::class
        )
    )]
    #[OA\Parameter(
        name: "id",
        in: 'path',
        description: "Product id",
        required: true,
        schema: new OA\Schema(type: 'integer')
    )]
    public function delete(int $id): JsonResponse
    {
        $product = $this->productRepository->find($id);
        if (!$product) {
            throw $this->createNotFoundException('No product found for id '.$id);
        }
        $this->entityManager->remove($product);
        $this->entityManager->flush();
        return $this->json([
            'product' => $product
        ]);
    }

    #[Route('/', name: 'create', methods: ['POST'])]
    #[OA\Response(
        response: 200,
        description: "Success",
        content: new Model(
            type: Product::class
        )
    )]
    #[OA\RequestBody(
        description: "Product object that needs to be added to the database",
        required: true,
        content: new Model(
            type: Product::class,
            groups: ['create']
        )
    )]
    public function create(Request $request): JsonResponse {
        $datas = json_decode($request->getContent(), true);

        // validate datas
        $errors = [];

        if (!isset($datas['name'])) {
            $errors['name'] = "Name is required";
        }

        if (!isset($datas['barcode'])) {
            $errors['barcode'] = "Barcode is required";
        }

        if (!isset($datas['description'])) {
            $errors['description'] = "Description is required";
        }

        if (!isset($datas['electricPower'])) {
            $errors['electricPower'] = "Electric power is required";
        }

        if (!isset($datas['electricCurrent'])) {
            $errors['electricCurrent'] = "Electric current is required";
        }

        if (!isset($datas['electricVoltage'])) {
            $errors['electricVoltage'] = "Electric voltage is required";
        }

        if (!isset($datas['type'])) {
            $errors['type'] = "Type is required";
        }

        if (count($errors) > 0) {
            return $this->json([
                'errors' => $errors
            ], 422);
        }


        $product = new Product();

        $product->setName($datas['name']);
        $product->setBarcode($datas['barcode']);
        $product->setDescription($datas['description']);
        $product->setElectricPower($datas['electricPower']);
        $product->setElectricCurrent($datas['electricCurrent']);
        $product->setElectricVoltage($datas['electricVoltage']);
        $product->setType($datas['type']);

        $this->entityManager->persist($product);
        $this->entityManager->flush();

        return $this->json([
            'product' => $product
        ]);
    }

    #[Route('/{id}', name: 'update', methods: ['PUT'])]
    #[OA\Response(
        response: 200,
        description: "Success",
        content: new Model(
            type: Product::class
        )
    )]
    #[OA\Parameter(
        name: "id",
        in: 'path',
        description: "Product id",
        required: true,
        schema: new OA\Schema(type: 'integer')
    )]
    #[OA\RequestBody(
        description: "Product object that needs to be updated to the database",
        required: true,
        content: new Model(
            type: Product::class,
            groups: ['update']
        )
    )]
    public function edit(int $id, Request $request): JsonResponse
    {
        $product = $this->productRepository->find($id);

        if (!$product) {
            throw $this->createNotFoundException('No product found for id '.$id);
        }

        $datas = json_decode($request->getContent(), true);

        $errors = [];

        if (!isset($datas['name'])) {
            $errors['name'] = "Name is required";
        }

        if (!isset($datas['barcode'])) {
            $errors['barcode'] = "Barcode is required";
        }

        if (!isset($datas['description'])) {
            $errors['description'] = "Description is required";
        }

        if (!isset($datas['electricPower'])) {
            $errors['electricPower'] = "Electric power is required";
        }

        if (!isset($datas['electricCurrent'])) {
            $errors['electricCurrent'] = "Electric current is required";
        }

        if (!isset($datas['electricVoltage'])) {
            $errors['electricVoltage'] = "Electric voltage is required";
        }

        if (!isset($datas['type'])) {
            $errors['type'] = "Type is required";
        }

        if (count($errors) > 0) {
            return $this->json([
                'errors' => $errors
            ], 422);
        }

        $product->setName($datas['name']);
        $product->setBarcode($datas['barcode']);
        $product->setDescription($datas['description']);
        $product->setElectricPower($datas['electricPower']);
        $product->setElectricCurrent($datas['electricCurrent']);
        $product->setElectricVoltage($datas['electricVoltage']);
        $product->setType($datas['type']);

        $this->entityManager->persist($product);
        $this->entityManager->flush();

        return $this->json([
            'product' => $product
        ]);
    }

    #[Route('/best/{barcode}', name: 'best', methods: ['GET'])]
    #[OA\Response(
        response: 200,
        description: "Success",
        content: new Model(
            type: Product::class
        )
    )]
    #[OA\Parameter(
        name: "barcode",
        in: 'path',
        description: "Product barcode",
        required: true,
        schema: new OA\Schema(type: 'string')
    )]
    public function best(string $barcode): JsonResponse
    {
        $product = $this->productRepository->findOneBy(['barcode' => $barcode]);
        if (!$product) {
            throw $this->createNotFoundException('No product found for barcode '.$barcode);
        }

        $bestElectricPower = $this->productRepository->findBestElectricPower($product);

        return $this->json([
            'product' => $product,
            'bestElectricPower' => $bestElectricPower
        ]);
    }
}