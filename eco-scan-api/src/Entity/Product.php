<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['create', 'update'])]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['create', 'update'])]
    private ?string $barcode = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['create', 'update'])]
    private ?string $description = null;

    #[ORM\Column]
    #[Assert\NotBlank]
    #[Assert\PositiveOrZero]
    #[Groups(['create', 'update'])]
    private ?float $electricPower = null;

    #[ORM\Column]
    #[Assert\NotBlank]
    #[Assert\PositiveOrZero]
    #[Groups(['create', 'update'])]
    private ?float $electricCurrent = null;

    #[ORM\Column]
    #[Assert\NotBlank]
    #[Assert\PositiveOrZero]
    #[Groups(['create', 'update'])]
    private ?float $electricVoltage = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['create', 'update'])]
    private ?string $type = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getBarcode(): ?string
    {
        return $this->barcode;
    }

    public function setBarcode(string $barcode): self
    {
        $this->barcode = $barcode;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getElectricPower(): ?float
    {
        return $this->electricPower;
    }

    public function setElectricPower(float $electricPower): self
    {
        $this->electricPower = $electricPower;

        return $this;
    }

    public function getElectricCurrent(): ?float
    {
        return $this->electricCurrent;
    }

    public function setElectricCurrent(float $electricCurrent): self
    {
        $this->electricCurrent = $electricCurrent;

        return $this;
    }

    public function getElectricVoltage(): ?float
    {
        return $this->electricVoltage;
    }

    public function setElectricVoltage(float $electricVoltage): self
    {
        $this->electricVoltage = $electricVoltage;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }
}
